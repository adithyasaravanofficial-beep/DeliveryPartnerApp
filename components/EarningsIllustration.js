import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../colors';
import BankIcon from './BankIcon';

// One small orange "spark" line.
// x, y  = where the CENTER of the line is
// angle = how much the line is turned (in degrees)
function Spark({x, y, angle}) {
  return (
    <View
      style={[
        styles.spark,
        {left: x - 14.5, top: y - 3, transform: [{rotate: angle + 'deg'}]},
      ]}
    />
  );
}

// The picture on Splash 2: an orange tilted card behind a white
// "Today's Earnings" card, with 3 sparks at the top right and 3 at the bottom left.
export default function EarningsIllustration() {
  return (
    <View style={styles.area}>
      {/* the orange card behind, turned a little to the left */}
      <View style={styles.backCard} />

      {/* the front card */}
      <View style={styles.frontCard}>
        {/* white box 1: Today's Earnings */}
        <View style={styles.box1}>
          <Text style={styles.small}>Today’s Earnings</Text>
          <Text style={styles.money}>$ 500.62</Text>
          <View style={styles.line} />
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>6</Text>
              <Text style={styles.statLabel}>Deliveries</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>23.4 mi</Text>
              <Text style={styles.statLabel}>Distance</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>$ 120</Text>
              <Text style={styles.statLabel}>Incentive</Text>
            </View>
          </View>
        </View>

        {/* white box 2: Next Payout */}
        <View style={styles.box2}>
          <BankIcon />
          <View style={styles.payoutText}>
            <Text style={styles.small}>Next Payout</Text>
            <Text style={[styles.money, styles.payoutMoney]}>$ 600</Text>
            <Text style={[styles.small, styles.payoutDate]}>on 26 Apr, 2025</Text>
          </View>
        </View>
      </View>

      {/* sparks: top right */}
      <Spark x={293} y={7} angle={102} />
      <Spark x={309} y={18} angle={130} />
      <Spark x={318} y={36} angle={-20} />
      {/* sparks: bottom left */}
      <Spark x={44} y={231} angle={-9} />
      <Spark x={55} y={249} angle={-35} />
      <Spark x={72} y={256} angle={-69} />
    </View>
  );
}

const styles = StyleSheet.create({
  // an empty area; everything inside is placed with "position: absolute"
  area: {
    height: 285,
    marginTop: 18,
  },
  spark: {
    position: 'absolute',
    width: 29,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  backCard: {
    position: 'absolute',
    left: 75,
    top: 40,
    width: 222,
    height: 175,
    borderRadius: 8,
    backgroundColor: colors.primary,
    transform: [{rotate: '-5deg'}],
  },
  frontCard: {
    position: 'absolute',
    left: 75,
    top: 40,
    width: 222,
    height: 175,
    padding: 7,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.cream,
  },
  box1: {
    height: 87,
    borderRadius: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 6,
    paddingTop: 4,
  },
  box2: {
    height: 69,
    marginTop: 7,
    borderRadius: 8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingLeft: 6,
    paddingTop: 3,
  },
  payoutText: {
    marginLeft: 26,
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
    color: colors.textDark,
  },
  money: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
    color: colors.textDark,
    marginTop: 2,
  },
  payoutMoney: {
    marginTop: 6,
  },
  payoutDate: {
    marginTop: 4,
  },
  line: {
    height: 1,
    marginTop: 4,
    backgroundColor: colors.line,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.textDark,
  },
  statLabel: {
    fontSize: 11,
    lineHeight: 15,
    marginTop: 1,
    color: colors.textGrey,
  },
});
