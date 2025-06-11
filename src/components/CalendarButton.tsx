"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Flex, Icon, IconButton } from "@/once-ui/components";

interface CalendarButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function CalendarButton({ className, style }: CalendarButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Flex
      fitWidth
      border="brand-alpha-medium"
      className={className}
      style={{
        cursor: "pointer",
        backdropFilter: "blur(var(--static-space-1))",
        ...style,
      }}
      background="brand-alpha-weak"
      radius="full"
      padding="4"
      gap="8"
      marginBottom="m"
      vertical="center"
      data-cal-namespace="30min"
      data-cal-link="kevinokinedo/30min"
      data-cal-config='{"layout":"month_view"}'
      role="button"
      tabIndex={0}
    >
      <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
      <Flex paddingX="8">Schedule a call</Flex>
      <IconButton
        data-border="rounded"
        variant="secondary"
        icon="chevronRight"
      />
    </Flex>
  );
} 