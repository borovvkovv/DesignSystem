import { getStartOfDay } from '@/utils/date';
import getStartOfMonth from 'date-fns/startOfMonth';

export enum InactiveRule {
  NotInFuture = 'notInFuture',
  NotInFutureMonth = 'notInFutureMonth',
  NotInPast = 'notInPast',
  NotInPastMonth = 'notInPastMonth',
  InFutureMonth = 'inFutureMonth',
  TestBetween2023And2026 = 'between20232026',
  TestJune2024NotAllowed = 'juneNotAllowed',
  TestAllFifthDays2024NotAllowed = 'fifthDayNotAllowed',
  TestDenyAll = 'denyAll',
}

export const isInactiveRules: { [Value in InactiveRule]: (date: Date) => boolean } = {
  [InactiveRule.NotInFuture]: (date) => date > new Date(),
  [InactiveRule.NotInFutureMonth]: (date) => date > getStartOfMonth(new Date()),
  [InactiveRule.NotInPast]: (date) => date < getStartOfDay(new Date()),
  [InactiveRule.NotInPastMonth]: (date) => date < getStartOfMonth(new Date()),
  [InactiveRule.InFutureMonth]: (date) => date <= getStartOfMonth(new Date()),
  [InactiveRule.TestBetween2023And2026]: (date) => date.getFullYear() < 2023 || date.getFullYear() > 2026,
  [InactiveRule.TestJune2024NotAllowed]: (date) => date.getMonth() === 5 && date.getFullYear() === 2024,
  [InactiveRule.TestAllFifthDays2024NotAllowed]: (date) => date.getDate() === 5 && date.getFullYear() === 2024,
  [InactiveRule.TestDenyAll]: () => true,
};

export const inactiveRuleErrorTexts: { [Value in InactiveRule]: string } = {
  [InactiveRule.NotInFuture]: 'Разрешена дата не больше текущей',
  [InactiveRule.NotInFutureMonth]: 'Рарешен максимум текущий месяц',
  [InactiveRule.NotInPast]: 'Рарешена минимум текущая дата',
  [InactiveRule.NotInPastMonth]: 'Разрешен минимум текущий месяц',
  [InactiveRule.InFutureMonth]: 'Разрешена дата начиная со следующего месяца',
  [InactiveRule.TestBetween2023And2026]: 'Допустимы года с 2023 по 2026',
  [InactiveRule.TestJune2024NotAllowed]: 'Не допутсимо указывать июнь 2024 года',
  [InactiveRule.TestAllFifthDays2024NotAllowed]: 'Не допустимо указывать пятые числа 2024 года',
  [InactiveRule.TestDenyAll]: 'Все даты недоступны',
};
