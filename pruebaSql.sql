
/* Punto uno*/
SELECT * FROM OrderTrabajo as OT
INNER JOIN Reporte as RP ON RP.id_ordenTrabajo = OT.id WHERE OT.codigo = "OT-234"

/* Punto dos*/
SELECT COUNT(*)  FROM OrderTrabajo WHERE fecha BETWEEN '2019-01-01 00:00:00' AND '2019-12-231 23:59:59'

/* Punto cuatro*/
SELECT US.nombreUsuario, COUNT(RP.id) FROM Usuarios as US
JOIN OrdenTrabajo AS OT ON OT.id_usuario = US.id
JOIN Reporte AS RP ON RP.id_ordenTrabajo = OT.id