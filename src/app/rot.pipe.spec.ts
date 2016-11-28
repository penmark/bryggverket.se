import { RotPipe } from './rot.pipe';

describe('Rot pipe', () => {
  let pipe: RotPipe;
  beforeEach(() => {
    pipe = new RotPipe();
  });

  it('should rot13 the email', () => {
    expect(pipe.transform('kalle@olle.com')).toEqual('xnyyr@byyr.pbz');
    expect(pipe.transform('xnyyr@byyr.pbz')).toEqual('kalle@olle.com');
  });
});
