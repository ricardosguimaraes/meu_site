import { Column, Heading, Text } from "@once-ui-system/core";

export default function NotFound() {
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        Página não encontrada
      </Heading>
      <Text onBackground="neutral-weak">A página que você procura não existe.</Text>
    </Column>
  );
}
