




//credito personal

function gen_table(){
    document.getElementById("tabPersonal").innerHTML="";
    let n=Number(document.getElementById("capitalPersonal").value);
    let n2=Number(document.getElementById("coutaPersonal").value);
    let n3=30;
    if(n>0){   
        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed(2);
            i2=((n*n3)/100)/n2;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tabPersonal").innerHTML=document.getElementById("tabPersonal").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=n.toFixed(2);
        t_i=i2*n2;
        d4=t_i.toFixed(2);
        t_p=r*n2;
        d5p=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5p;        
    }else{
        const botonSweet = document.getElementById('boton-sweet');
  
        botonSweet.addEventListener('click', () => {
          swal.fire ({
              title: 'Ingrese valores completo!',
              text: 'Por favor, completar casillas para simular su prestamo.',
              icon: 'warning',
              confirmButtonText: 'Aceptar'
          })
        })
      
        
    }
}



// credito hipotecario

function gen_table1(){
    document.getElementById("tabHipotecario").innerHTML="";
    let n=Number(document.getElementById("capitalHipotecario").value);
    let n2=Number(document.getElementById("coutaHipotecario").value);
    let n3=60;
    if(n>0){   
        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed(2);
            i2=((n*n3)/100)/n2;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tabHipotecario").innerHTML=document.getElementById("tabHipotecario").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=n.toFixed(2);
        t_i=i2*n2;
        d4=t_i.toFixed(2);
        t_p=r*n2;
        d5h=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5h;        
    }else{
        const botonSweet = document.getElementById('boton-sweet');
  
        botonSweet.addEventListener('click', () => {
          swal.fire ({
              title: 'Ingrese valores completo!',
              text: 'Por favor, completar casillas para simular su prestamo.',
              icon: 'warning',
              confirmButtonText: 'Aceptar'
          })
        })

    
       
    }
}

// credito automovil

function gen_table2(){
    document.getElementById("tabAutomovil").innerHTML="";
    let n=Number(document.getElementById("capitalAutomovil").value);
    let n2=Number(document.getElementById("coutaAutomovil").value);
    let n3=40;
    if(n>0){   
        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed(2);
            i2=((n*n3)/100)/n2;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tabAutomovil").innerHTML=document.getElementById("tabAutomovil").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=n.toFixed(2);
        t_i=i2*n2;
        d4=t_i.toFixed(2);
        t_p=r*n2;
        d5a=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5a;        
    }else{
        const botonSweet = document.getElementById('boton-sweet');
  
  botonSweet.addEventListener('click', () => {
    swal.fire ({
        title: 'Ingrese valores completo!',
        text: 'Por favor, completar casillas para simular su prestamo.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
    })
  })

    
    }
}


// credito electrodomestico

function gen_table4(){
    document.getElementById("tabElectrodomestico").innerHTML="";
    let n=Number(document.getElementById("capitalElectrodomestico").value);
    let n2=Number(document.getElementById("coutaElectrodomestico").value);
    let n3=20;
    if(n>0){   
        for(i=1;i<=n2;i++){
            ca=n/n2;
            d1=ca.toFixed(2);
            i2=((n*n3)/100)/n2;
            d2=i2.toFixed(2);
            r=ca+i2;
            d3=r.toFixed(2);
            document.getElementById("tabElectrodomestico").innerHTML=document.getElementById("tabElectrodomestico").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=n.toFixed(2);
        t_i=i2*n2;
        d4=t_i.toFixed(2);
        t_p=r*n2;
        d5e=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5e;        
    }else{
        const botonSweet = document.getElementById('boton-sweet');
  
  botonSweet.addEventListener('click', () => {
    swal.fire ({
        title: 'Ingrese valores completo!',
        text: 'Por favor, completar casillas para simular su prestamo.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
    })
  })

        
    }
}



