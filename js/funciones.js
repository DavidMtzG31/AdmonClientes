function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = () => {
        console.log('Hubo un error');
    }

    abrirConexion.onsuccess = () => {
        DB = abrirConexion.result;
        console.log('La base ya está creada');
    }
}
