import { Crypto } from '../data/model'

class CryptoFormat {
  private convertPercentage(value: string, spread: number) {
    return (Number(value) * (1 + spread / 100)).toFixed(5)
  }

  setPercentage(data: Crypto, spread: number) {
    return {
      assetCode: data.assetCode,
      ask: this.convertPercentage(data.ask, spread),
      bid: this.convertPercentage(data.bid, spread),
      close: this.convertPercentage(data.close, spread),
      high: this.convertPercentage(data.high, spread),
      low: this.convertPercentage(data.low, spread),
      lowLast24: this.convertPercentage(data.lowLast24, spread),
      open: this.convertPercentage(data.open, spread),
      openLast24: this.convertPercentage(data.openLast24, spread),
      volume: data.volume,
    }
  }
}

export default new CryptoFormat()
