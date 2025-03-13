# Prueba Técnica: Programador Angular

Antes de todo, muchas gracias por la oportunidad. Estaré encantado de poder trabajar con ustedes y seguir aprendiendo.

Quiero describir el proyecto y lo que resolví en el camino de la prueba:

1. Creé un componente llamado TableUsersComponent
2. Implementé carga perezosa (lazy loading) para que se cargue solo cuando sea necesario
3. Creé un servicio con el comando `ng g s` llamado ApisService, importé HttpClient y lo declaré como http (método privado e inmutable)
4. Comencé a consumir los servicios proporcionados con el método GET y utilicé RxJS para las peticiones con observables
5. Creé pipes para números telefónicos y para identificar el país con su código
6. Desarrollé una directiva para poder seleccionar la fila de la tabla
7. Instalé ngx-toastr para mostrar notificaciones en caso de error o cuando no se encuentra un usuario
8. Limité los resultados a 25 registros
9. Implementé destrucción de suscripciones con pipe, takeUntil, catchError y map para limitar a 25 registros
10. Creé una función que realiza búsqueda de usuarios por nombres y email
11. La directiva para marcar la fila de la tabla se encuentra dentro de la carpeta "directiva"
12. Los pipes están dentro de una carpeta llamada "pipes": CountryNamePipe y NumeroTelefonoPipe
13. También incluí un ejemplo con NgRx para manejo de estado, aunque sinceramente no lo he terminado
