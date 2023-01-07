type ProducerData = {
  producer: string,
  interval: number,
  previousWin: number,
  followingWin: number
}

export type ProducersInterval = {
  min: Array<ProducerData>;
  max: Array<ProducerData>;
}
