import '@testing-library/jest-dom';

import { config } from 'dotenv';
import dotenv_expand from 'dotenv-expand';

dotenv_expand(config({ path: '.env.development' }));
