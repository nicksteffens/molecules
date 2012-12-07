


Molecule = {

  callElement: function(num) {
    Molecule.erase();
    atom = Molecule.getElement(num);
    Molecule.getParticles(atom);
    Molecule.drawAtom(atom);

  },


  getElement: function(num) {
    $.each(isotopes, function() {
      if(this.id == num) {
        atom = {
          id: this.id,
          name: this.name,
          symbol: this.symbol,
          weight: this.weight
        };

      }
    });

    if( atom.id!== undefined ) {
      return atom;
    }
  },

  getParticles: function(obj) {
    obj.particles = {
      electrons: obj.id,
      protons: obj.id,
      neutrons: (Math.round(obj.weight) - obj.id)
    };
  },

  drawAtom: function(obj) {
    // information
    $.each(obj, function(idx, val){
      if(idx != 'particles') {
        $('.element .' + idx).text(val);
      }
    });

    // atomic structure
    $.each(obj.particles, function(i, v){
      // text
      $('.element .' + i).text(v);

      // shape
      for(var z = 0; z < v; z++) {
        $('#molecule .'+ i).append('<div class="particle"></div>');
      }
    });

  },

  erase: function() {
    $('.particle').remove();
    $('.element dd').empty();
  }

};