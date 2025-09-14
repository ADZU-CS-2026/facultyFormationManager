'use client';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);

{/* INJECTING FONTAWESOME TO CLIENT */}

export default function FontAwesomeSetup() {
  return null;
}