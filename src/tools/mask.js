export default function result() {
  const cpf = '15452545866';
  const convert = cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-'); //ESSE
  return convert
}

// replace telefone: const result = tel.replace(/(\d{2})(\d{5})/, '$1 $2-');
