import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export function useForm(form) {
  const rules = {
    ip: {
      required,
    },
  };

  const v$ = useVuelidate(rules, form);

  return v$;
}
