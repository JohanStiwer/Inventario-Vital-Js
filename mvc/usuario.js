// Clase que representa el modelo de paciente
class Paciente {
  constructor(idPaciente, idUsuario, numeroDocumento, nombre, apellido) {
    this.idPaciente = idPaciente;
    this.idUsuario = idUsuario;
    this.numeroDocumento = numeroDocumento;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

// Clase que representa la vista de paciente
class PacienteView {
  constructor(model, element) {
    this.model = model; // El modelo de paciente asociado a la vista
    this.element = element; // El elemento HTML donde se muestra la vista
    this.render(); // Se llama al método render para mostrar la vista inicialmente
  }

  // Método que actualiza la vista con los datos del modelo
  render() {
    this.element.innerHTML = `
        <p>Id Paciente: ${this.model.idPaciente}</p>
        <p>Id Usuario: ${this.model.idUsuario}</p>
        <p>Número Documento: ${this.model.numeroDocumento}</p>
        <p>Nombre: ${this.model.nombre}</p>
        <p>Apellido: ${this.model.apellido}</p>
      `;
  }
}

// Clase que representa el controlador de paciente
class PacienteController {
  constructor(model, view) {
    this.model = model; // El modelo de paciente asociado al controlador
    this.view = view; // La vista de paciente asociada al controlador
    this.init(); // Se llama al método init para inicializar el controlador
  }

  // Método que inicializa el controlador
  init() {
    // Aquí se pueden agregar eventos o acciones que el controlador debe manejar
    // Por ejemplo, se podría agregar un botón para editar los datos del paciente
    // y actualizar el modelo y la vista correspondientes
  }
}

// Se crea una instancia del modelo de paciente con algunos datos de prueba
let paciente = new Paciente(1, 1, "123456789", "Juan", "Pérez");

// Se crea una instancia de la vista de paciente con el modelo y un elemento HTML
let pacienteView = new PacienteView(
  paciente,
  document.getElementById("paciente")
);

// Se crea una instancia del controlador de paciente con el modelo y la vista
let pacienteController = new PacienteController(paciente, pacienteView);
