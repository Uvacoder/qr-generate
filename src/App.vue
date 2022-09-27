<script setup lang="ts">
import { Input, Button, Form, Flex } from '@sigveh/basic-ui'
</script>

<template>
  <Form>
    <Flex direction="column" align="end">
      <Input placeholder="https://example.com" />
      <Button theme="primary">Generate</Button>
    </Flex>
  </Form>
</template>

<style></style>
