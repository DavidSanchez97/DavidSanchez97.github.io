import css from "../styles/Fecha.scss"
const Fecha = () => {
  const fecha = new Date()
  const result = fecha.toDateString()
  const formatDate =  (dateString) => {
    if(!dateString){
      return ''
    }
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',];
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const date = new Date(dateString); //Se crea con GMT-0
    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000) //Acomodar el offset del horario
    return `${days[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`
  
  };
  return (
    <span className={css.fecha}>{formatDate(result)}</span>
  )
}

export default Fecha;