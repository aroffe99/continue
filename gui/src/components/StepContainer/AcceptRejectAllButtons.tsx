import { useContext } from "react";
import { useDispatch } from "react-redux";
import { IdeMessengerContext } from "../../context/IdeMessenger";
import { updateApplyState } from "../../redux/slices/stateSlice";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ApplyState } from "core/protocol/ideWebview";

export interface AcceptRejectAllButtonsProps {
  pendingApplyStates: ApplyState[];
}

export default function AcceptRejectAllButtons({
  pendingApplyStates,
}: AcceptRejectAllButtonsProps) {
  const dispatch = useDispatch();
  const ideMessenger = useContext(IdeMessengerContext);

  const handleAcceptAll = async () => {
    for (const applyState of pendingApplyStates) {
      ideMessenger.post("acceptDiff", { filepath: applyState.filepath });
      dispatch(
        updateApplyState({
          streamId: applyState.streamId,
          status: "closed",
        }),
      );
    }
  };

  const handleRejectAll = async () => {
    for (const applyState of pendingApplyStates) {
      ideMessenger.post("rejectDiff", { filepath: applyState.filepath });
      dispatch(
        updateApplyState({
          streamId: applyState.streamId,
          status: "closed",
        }),
      );
    }
  };

  return (
    <div className="flex justify-center gap-2 border-b border-gray-200/25 p-1 px-3">
      <button
        className="flex cursor-pointer items-center border-none bg-transparent px-2 py-1 text-xs text-gray-300 opacity-80 hover:opacity-100 hover:brightness-125"
        onClick={handleRejectAll}
      >
        <XMarkIcon className="mr-1 h-4 w-4" />
        Reject all changes
      </button>
      <button
        className="flex cursor-pointer items-center border-none bg-transparent px-2 py-1 text-xs text-gray-300 opacity-80 hover:opacity-100 hover:brightness-125"
        onClick={handleAcceptAll}
      >
        <CheckIcon className="mr-1 h-4 w-4" />
        Accept all changes
      </button>
    </div>
  );
}