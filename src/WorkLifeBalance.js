import React from "react";
import { ResponsiveBar } from "@nivo/bar"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBar = ({  data = [
    {
      "country": "AD",
      "hot dog": 25,
      "hot dogColor": "hsl(8, 70%, 50%)",
      "burger": 161,
      "burgerColor": "hsl(193, 70%, 50%)",
      "sandwich": 54,
      "sandwichColor": "hsl(299, 70%, 50%)",
      "kebab": 60,
      "kebabColor": "hsl(237, 70%, 50%)",
      "fries": 60,
      "friesColor": "hsl(282, 70%, 50%)",
      "donut": 129,
      "donutColor": "hsl(267, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 122,
      "hot dogColor": "hsl(291, 70%, 50%)",
      "burger": 171,
      "burgerColor": "hsl(266, 70%, 50%)",
      "sandwich": 87,
      "sandwichColor": "hsl(269, 70%, 50%)",
      "kebab": 175,
      "kebabColor": "hsl(14, 70%, 50%)",
      "fries": 149,
      "friesColor": "hsl(202, 70%, 50%)",
      "donut": 60,
      "donutColor": "hsl(50, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 112,
      "hot dogColor": "hsl(178, 70%, 50%)",
      "burger": 77,
      "burgerColor": "hsl(340, 70%, 50%)",
      "sandwich": 45,
      "sandwichColor": "hsl(196, 70%, 50%)",
      "kebab": 24,
      "kebabColor": "hsl(320, 70%, 50%)",
      "fries": 79,
      "friesColor": "hsl(202, 70%, 50%)",
      "donut": 104,
      "donutColor": "hsl(147, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 122,
      "hot dogColor": "hsl(54, 70%, 50%)",
      "burger": 42,
      "burgerColor": "hsl(134, 70%, 50%)",
      "sandwich": 128,
      "sandwichColor": "hsl(175, 70%, 50%)",
      "kebab": 165,
      "kebabColor": "hsl(56, 70%, 50%)",
      "fries": 117,
      "friesColor": "hsl(81, 70%, 50%)",
      "donut": 8,
      "donutColor": "hsl(23, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 193,
      "hot dogColor": "hsl(262, 70%, 50%)",
      "burger": 122,
      "burgerColor": "hsl(260, 70%, 50%)",
      "sandwich": 120,
      "sandwichColor": "hsl(52, 70%, 50%)",
      "kebab": 104,
      "kebabColor": "hsl(142, 70%, 50%)",
      "fries": 84,
      "friesColor": "hsl(62, 70%, 50%)",
      "donut": 26,
      "donutColor": "hsl(348, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 52,
      "hot dogColor": "hsl(188, 70%, 50%)",
      "burger": 105,
      "burgerColor": "hsl(341, 70%, 50%)",
      "sandwich": 96,
      "sandwichColor": "hsl(238, 70%, 50%)",
      "kebab": 21,
      "kebabColor": "hsl(59, 70%, 50%)",
      "fries": 50,
      "friesColor": "hsl(238, 70%, 50%)",
      "donut": 101,
      "donutColor": "hsl(356, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 72,
      "hot dogColor": "hsl(174, 70%, 50%)",
      "burger": 28,
      "burgerColor": "hsl(306, 70%, 50%)",
      "sandwich": 143,
      "sandwichColor": "hsl(156, 70%, 50%)",
      "kebab": 83,
      "kebabColor": "hsl(356, 70%, 50%)",
      "fries": 15,
      "friesColor": "hsl(192, 70%, 50%)",
      "donut": 27,
      "testColor": "hsl(220, 70%, 50%)",
      "test": 100
    }
  ] /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut', 'test' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)
export default MyResponsiveBar;