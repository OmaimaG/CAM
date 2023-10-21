"use client"
import { Card, Metric, Text, Flex, BadgeDelta, DeltaType, Color, Grid } from "@tremor/react";

const colors: { [key: string]: Color } = {
  increase: "emerald",
  moderateIncrease: "emerald",
  unchanged: "orange",
  moderateDecrease: "rose",
  decrease: "rose",
};

const categories: {
  title: string;
  metric: number;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
}[] = [
  {
    title: "Vulnerabilities",
    metric: 142,
    metricPrev: "95",
    delta: "49.5%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Security Incidents",
    metric: 8,
    metricPrev: "5",
    delta: "60%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Threat Alerts",
    metric: 23,
    metricPrev: "30",
    delta: "-23.3%",
    deltaType: "moderateDecrease",
  },
];

export default function CyberSecurityMetrics() {
  return (
    <Grid numItemsSm={2} numItemsLg={3} className="gap-4">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Flex justifyContent="start" alignItems="baseline" className="truncate space-x-3">
            <Metric>{item.metric}</Metric>
            <Text className="truncate">from {item.metricPrev}</Text>
          </Flex>
          <Flex justifyContent="start" className="space-x-2 mt-4">
            <BadgeDelta deltaType={item.deltaType} />
            <Flex justifyContent="start" className="space-x-1 truncate">
              <Text color={colors[item.deltaType]}>{item.delta}</Text>
              <Text className="truncate">change compared to the previous period</Text>
            </Flex>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
