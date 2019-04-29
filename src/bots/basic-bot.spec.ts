import { BasicBot } from './basic-bot';
import { Map } from '../map';

describe('move a basic bot', () => {

  beforeEach(() => {
  });

  it('should throw errors cause the bot is not on a map', () => {
    const bot = new BasicBot();
    const forward = () => {
      bot.forward();
    };
    expect(forward).toThrow('The bot can\'t move until it has been put on a map.');
    const right = () => {
      bot.right();
    };
    expect(right).toThrow('The bot can\'t turn until it has been put on a map.');
  });

  it('should forward 2 times', () => {
    const map = new Map(10, 10);
    const bot = new BasicBot();
    bot.putOnMap(map);
    bot.forward().forward();
  });

});
