var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  onSelect: function() {
      console.log(this.getMoment().format('DD/MM/YYYY'));
  }
});

// new window.JustValidate('.js-form');

new window.JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 40,
    },
    cpf: {
        required: true,
        maxLength: 11,
    },
    email: {
        required: true,
        email: true,
        maxLength: 50,
        },
    endereco : {
      required: true,
      maxLength: 200,
    },
    cidade: {
      required: true,
      maxLength: 28,
    },
    resumo: {
      required: true,
      maxLength: 1000,
    },
    cargo: {
      required: true,
      maxLength:40,
    },
    descricaoCargo: {
      required: true,
      maxLength: 500,
    },
    dataInicio: {
      required: true
    },
    radio: {
      required: true
    },
  },

  messages: {
    name: {
      required: 'Preencha este campo',
      minLength: 'Digite mais que :value caracteres',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
    cpf: {
      required: 'Preencha este campo',
    },
    email: {
      required: 'Preencha este campo',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
    endereco : {
      required: 'Preencha este campo',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
    cidade: {
      required: 'Preencha este campo',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
    resumo: {
      required: 'Preencha este campo',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
    cargo: {
      required: 'Preencha este campo',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
    descricaoCargo: {
      required: 'Preencha este campo',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
    dataInicio: {
      required: 'Preencha este campo',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
    radio: {
      required: 'Preencha este campo',
      maxLength: 'Excedeu o numero máximo de :value caracteres permitidos',
    },
  },
  
  focusWrongField: true,

  submitHandler: function (form, values, ajax) {
      ajax({
          url: 'https://just-validate-api.herokuapp.com/submit',
          method: 'POST',
          data: values,
          async: true,
          callback: function (response) {
              alert('AJAX submit successful! \nResponse from server:' + response)
          },
          error: function (response) {
              alert('AJAX submit error! \nResponse from server:' + response)
          }
      });
  },
  
  invalidFormCallback: function (errors) {
      console.log(errors);
  },
});
