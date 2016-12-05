const Mortgage = name => this.name = name

Mortgage.prototype = {

  applyFor: amount => {
    var result = 'approved';
    if (!new Bank().verify(this.name, amount)) {
      result = 'denied';
    } else if (!new Credit().get(this.name)) {
      result = 'denied';
    } else if (!new Background().check(this.name)) {
      result = 'denied';
    }
    return this.name + ' has been ' + result + ' for a ' + amount + ' mortgage';
  }
}

const Bank = () => {
  this.verify = (name, amount) => {
    // complex logic
    return true;
  }
}

const Credit = () => {
  this.get = name => {
    // complex logic
    return true;
  }
}

const Background = () => {
  this.check = (name) => {
    // complex logic
    return true;
  }
}

function run() {
  const mortgage = new Mortgage('Joan Templeton');
  const result = mortgage.applyFor('$100,000');

  alert(result);
}


/// another facade sample

const module = (() => {
  const _private = {
    i: 5,
    get: () => console.log('current value: ' + this.i),
    set: val => this.i = val,
    run: () => console.log('running'),
    jump: () => console.log('jumping')
  };

  return {
    facade: (args) => {
      _private.set(args.val);
      _private.get();
      if (args.run) {
        _private.run();
      }
    }
  };
})();

module.facade({
  run: true,
  val: 10
});
// Outputs: 'current value: 10' and 'running'
