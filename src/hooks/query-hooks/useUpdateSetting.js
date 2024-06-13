import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: (data) => {
      toast.success("Setting updated");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
  });

  return { updateSetting, isUpdating };
}
