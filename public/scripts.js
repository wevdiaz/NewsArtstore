const Mask = {
    apply(input, func) {
        setTimeout(function(){
            input.value = Mask[func](input.value);
        }, 1)
    },

    formatBRL(value) {
        value = value.replace(/\D/g, "");

        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(value/100);

       
    }
}


const PhotosUpload = {

    uploadLimit: 5,
    
    handleFileInput(event) {
        const { files: fileList } = event.target;
        const { uploadLimit } = PhotosUpload;

        if (fileList.length > uploadLimit) {
            alert(`Envie no máximo ${uploadLimit} fotos`);
            event.preventDefault();
            return;
        }

        Array.from(fileList).forEach((file) => {});

       
    }
}