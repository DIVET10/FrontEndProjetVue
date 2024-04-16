<template>
  <div></div>
</template>

<script>
import { required, email, min } from 'vee-validate/rules';


export const nomValidationRule = { required, min: min(2) };
export const emailValidationRule = { required, email };
export const motDePasseValidationRule = { required };
export const roleIdValidationRule = { required };
</script>
