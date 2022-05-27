function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

//let signaturePad = null;

window.addEventListener("load", async() => {

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let curso = document.getElementById('curso').value;
        let nombre = document.getElementById('nombre').value;
        let edad = document.getElementById('edad').value;
        let sexo = document.getElementById('sexo').value;
        let fdn = document.getElementById('fdn').value;
        let domicilio = document.getElementById('domicilio').value;
        let telefono = document.getElementById('telefono').value;
        let tcasa = document.getElementById('tcasa').value;
        let email = document.getElementById('email').value;
        let grupo = document.getElementById('grupo').value;
        let turno = document.getElementById('turno').value;
        let codigo = document.getElementById('codigo').value;

        let nombreP = document.getElementById('np').value;
        let padre_vivo = document.querySelector('input[name="vive-sino"]:checked').value;
        let ocupacionP = document.getElementById('ocupacionP').value;
        let escolaridadP = document.getElementById('escolaridadP').value;
        let edadP = document.getElementById('edadP').value;

        let nombreM = document.getElementById('nm').value;
        let madre_viva = document.querySelector('input[name="vivemama"]:checked').value;
        let ocupacionM = document.getElementById('ocupacionM').value;
        let escolaridadM = document.getElementById('escolaridadM').value;
        let edadM = document.getElementById('edadM').value;
        
        let vivir_c_fam = document.querySelector('input[name="vivef"]:checked').value;
        let lugar_fam = document.getElementById('lf').value;
        let trabajo = document.querySelector('input[name="trabajo"]:checked').value;
        let lug_y_ocu = document.getElementById('lyo').value;
        let estado_cvl = document.getElementById('ec').value;
        let num_hijos = document.getElementById('nhijos').value;
        
        let ecu_Prim = document.getElementById('escp').value;
        let prom_Prim = document.getElementById('promedioP').value;
        let esc_Sec = document.getElementById('escs').value;
        let prom_Sec = document.getElementById('promedioS').value;
        let rep_grado = document.getElementById('repetido').value;
        let grado_rep = document.getElementById('gradorep').value;
        let res_PIENSEII = document.getElementById('escp').value;
        let num_SS = document.getElementById('nsocial').value;
        let clin_asig = document.getElementById('casig').value;
        let tp_sangre = document.getElementById('tsangre').value;
        let Enf_aten = document.querySelector('input[name="Enfatencion"]:checked').value;
        let tp_enfe = document.getElementById('cenf').value;
        let tp_aten = document.getElementById('tipoat').value;
        let discap = document.querySelector('input[name="discap"]:checked').value;
        let tp_discap = document.getElementById('ccap').value;
        
        let deporte = document.getElementById('depp').value;
        let gruposSC = document.getElementById('grupos').value;
        let pref_musical = document.getElementById('musica').value;
        let lectura = document.getElementById('lectura').value;
        let pasatiempos = document.getElementById('pasatiempos').value;
        
        /*let foto = document.getElementById('imgfile').image;*/

        generatePDF(curso, nombre, edad, sexo, fdn, domicilio, telefono, tcasa, email, grupo, turno, codigo, nombreP, padre_vivo, ocupacionP, escolaridadP, edadP, nombreM, madre_viva, ocupacionM, escolaridadM, edadM, vivir_c_fam, lugar_fam, trabajo, lug_y_ocu, estado_cvl, num_hijos, ecu_Prim, prom_Prim, esc_Sec, prom_Sec, rep_grado, grado_rep, res_PIENSEII, num_SS, clin_asig, tp_sangre, Enf_aten, tp_enfe, tp_aten, discap, tp_discap, deporte, gruposSC, pref_musical, lectura, pasatiempos, /*foto*/);
    })
//    signaturePad = new SignaturePad()
});


async function generatePDF(curso, nombre, edad, sexo, fdn, domicilio, telcel, tcasa, email, grupo, turno, codigo, nombreP, padre_vivo, ocupacionP, escolaridadP, edadP, nombreM, madre_viva, ocupacionM, escolaridadM, edadM, vivir_c_fam, lugar_fam, trabajo, lug_y_ocu, estado_cvl, num_hijos, ecu_Prim, prom_Prim, esc_Sec, prom_Sec, rep_grado, grado_rep, res_PIENSEII, num_SS, clin_asig, tp_sangre, Enf_aten, tp_enfe, tp_aten, discap, tp_discap, deporte, gruposSC, pref_musical, lectura, pasatiempos, foto) {
    const image = await loadImage("formulario.jpg");

    const pdf = new jspdf('p', 'pt', 'letter');

    
    pdf.addImage(image, 'PNG', 0, 0, 610, 792);
    
    pdf.setFontSize(25);
    pdf.text(curso, 225, 80);

    pdf.setFontSize(9);
    pdf.text(nombre, 115, 138);
    pdf.text(edad, 95, 151);
    pdf.text(sexo, 155, 151);
    pdf.text(fdn, 350, 151);
    pdf.text(domicilio, 120, 165);
    pdf.text(telcel, 115, 193);
    pdf.text(tcasa, 340, 193);
    pdf.text(email, 155, 204);
    pdf.text(grupo, 95, 218);
    pdf.text(turno, 225, 218);
    pdf.text(codigo, 335, 218);


    pdf.text(nombreP, 155, 259);
    pdf.setFontSize(18)
    if (padre_vivo == "1") {
        pdf.text("*", 480, 265);
    }
    else{
        pdf.text("*", 530, 265);
    }
    pdf.setFontSize(9);
    pdf.text(ocupacionP, 150, 272);
    pdf.text(edadP, 305, 272);
    pdf.text(escolaridadP, 400, 272);
    

    pdf.text(nombreM, 170, 286);
    pdf.setFontSize(18)
    if (madre_viva == "1") {
        pdf.text("*", 480, 290);
    }
    else{
        pdf.text("*", 530, 290);
    }
    pdf.setFontSize(9);
    pdf.text(ocupacionM, 160, 299);
    pdf.text(edadM, 315, 299);
    pdf.text(escolaridadM, 410, 299);
    
    
    pdf.text(lugar_fam, 224, 313);
    pdf.setFontSize(18);
    if (vivir_c_fam == "1") {
        pdf.text("*", 445, 316);
    }
    else{
        pdf.text("*", 490, 316);
    }
    if (trabajo == "1") {
        pdf.text("*", 130, 330);
    }
    else{
        pdf.text("*", 175, 330);
    }
    pdf.text(lug_y_ocu, 300, 325);
    pdf.text(estado_cvl, 160, 338);
    pdf.text(num_hijos, 410, 338);
    
    pdf.text(ecu_Prim, 155, 380);
    pdf.text(prom_Prim, 510, 379);
    pdf.text(esc_Sec, 155, 393);
    pdf.text(prom_Sec, 510, 393);
    pdf.setFontSize(18);
    if (rep_grado == "Si") {
        pdf.text("*", 258, 409);
    }
    else{
        pdf.text("*", 293, 409);
    }
    pdf.setFontSize(9);
    pdf.text(grado_rep, 359, 407);
    pdf.text(res_PIENSEII, 230, 420);
    pdf.text(num_SS, 180, 459);
    
    pdf.save("example.pdf");
}
