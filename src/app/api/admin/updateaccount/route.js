import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

// FOR UPDATING CREDENTIALS (password, name, ID)
export async function PATCH(req) {
  try {
    const { id, newPass, newName, newID } = await req.json();
    const normalizedId = String(id).trim();
    const updates = [];
    const params = [];

    // Build dynamic UPDATE query based on provided fields
    if (newPass) {
      updates.push("password = ?");
      params.push(newPass);
    }
    if (newName) {
      updates.push("name = ?");
      params.push(newName);
    }

    if (updates.length === 0 && !newID) {
      return NextResponse.json(
        { message: "No updates provided!" },
        { status: 400 }
      );
    }

    // Handle ID change separately (it's a primary key)
    if (newID && newID !== normalizedId) {
      // Check if new ID already exists
      const [existing] = await pool.execute(
        "SELECT id FROM adminaccount WHERE id = ?",
        [String(newID).trim()]
      );

      if (existing.length > 0) {
        return NextResponse.json(
          { message: "ID already in use!" },
          { status: 400 }
        );
      }

      // First update other fields if any
      if (updates.length > 0) {
        params.push(normalizedId);
        const updateQuery = `UPDATE adminaccount SET ${updates.join(", ")} WHERE id = ?`;
        await pool.execute(updateQuery, params);
      }

      // Now change the ID
      const newIDNormalized = String(newID).trim();
      await pool.execute(
        "UPDATE adminaccount SET id = ? WHERE id = ?",
        [newIDNormalized, normalizedId]
      );

      return NextResponse.json(
        { message: "Account updated successfully!" },
        { status: 200 }
      );
    }

    // Update without ID change
    if (updates.length > 0) {
      params.push(normalizedId);
      const updateQuery = `UPDATE adminaccount SET ${updates.join(", ")} WHERE id = ?`;
      const [result] = await pool.execute(updateQuery, params);

      if (result.affectedRows > 0) {
        return NextResponse.json(
          { message: "Account updated successfully!" },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { message: "Account not updated!" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "No changes made!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: `Server Error: ${err.message}` },
      { status: 500 }
    );
  }
}
