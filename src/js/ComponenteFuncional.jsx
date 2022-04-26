import css from 'styles/ComponenteFuncional';
/** Componente Funcional 
 * 
 * Con propiedades (props)
 * 
 * title: El titulo que se pondra dentro de la etiqueta h1
 * children: El contenido del cuerpo de la etiqueta ComponenteFuncional
 * 
*/
const ComponenteFuncional = ({title,children}) => (
    <div className={css.container}>
        <h1>{title}</h1> 
        {children}
    </div>
)

export default ComponenteFuncional;