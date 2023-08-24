import React from 'react'
import { Button, Text } from 'react-native'
import Card from '../components/Card'

const Pagina1 = () => {
  return (
   <>
   
   <Card titulo="Sem conteúdo" />
      <Card titulo="Mobile">
        <Text>React Native</Text>
      </Card>

      <Card titulo="Principal" nome="Miguel">
        <Text>Parágrafo 1</Text>
        <Text>Parágrafo 2</Text>
        <Text>Parágrafo 3</Text>
        <Button title="Detalhes" />
      </Card>

      <Card titulo="Flamengo Cheirniho">
      </Card>
   
   </>
  )
}

export default Pagina1