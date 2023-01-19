import { Text, View, ScrollView } from 'react-native';

import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates';

import { Header } from '../components/Header';
import { HabitDay, DAY_SIZE } from '../components/HabitDay';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const minimunSummaryDatesSizes = 18 * 3;
const amountOfDaysToFill = minimunSummaryDatesSizes - datesFromYearStart.length

export function Home() {
  return (
    <View className='flex-1 bg-background px-8 pt-16'>
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          // feito um map no array para mostrar os DIAS DA SEMANA acima dos quadradinhos usando a mesma direção do DAY_SIZE
          weekDays.map((weekDay, i) => (
            <Text
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: DAY_SIZE }}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='flex-row flex-wrap'>
          {
            // feito um map em cima do calculo da QUANTIDADE DE DIAS PASSADOS apartir do primeiro dia do ano
            // e renderizar a quantidade de quadrinhos baseados nesse calculo.
            datesFromYearStart.map(date => (
              <HabitDay key={date.toISOString()} />
            ))
          }

          {
            // aqui ele pega a quantidade de quadradinhos a serem renderizados DEPOIS DOS DIAS PASSADOS
            // ele pega a quantidade e faz um map renderizando a quantidade de quadradinhos desabilitados
            // aqui ele usa a mesma altura e largura do DAY_SIZE
            amountOfDaysToFill > 0 && Array
              .from({ length: amountOfDaysToFill })
              .map((_, index) => (
                <View
                  key={index}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              ))
          }
        </View>
      </ScrollView>

    </View>
  )
} 