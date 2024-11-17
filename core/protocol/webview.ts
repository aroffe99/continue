import { ConfigValidationError } from "../config/validation.js";

import type {
  ContextItemWithId,
  IndexingProgressUpdate,
  IndexingStatusUpdate,
} from "../index.js";

export type ToWebviewFromIdeOrCoreProtocol = {
  configUpdate: [undefined, void];
  configError: [ConfigValidationError[] | undefined, void];
  getDefaultModelTitle: [undefined, string];
  indexProgress: [IndexingProgressUpdate, void];
  "indexing/statusUpdate": [IndexingStatusUpdate, void];
  refreshSubmenuItems: [undefined, void];
  isContinueInputFocused: [undefined, boolean];
  addContextItem: [
    {
      historyIndex: number;
      item: ContextItemWithId;
    },
    void,
  ];
  setTTSActive: [boolean, void];
  getWebviewHistoryLength: [undefined, number];
};
