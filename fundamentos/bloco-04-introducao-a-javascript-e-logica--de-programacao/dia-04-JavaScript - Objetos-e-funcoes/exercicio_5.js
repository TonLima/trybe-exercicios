let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: " Christimas on Bear Moutain, Dell Four Color Comics #178 ",
  nota: " O último Mac Patinhas ",
  recorrente: " Sim ",
};

for (let properties in info) {
  if (
    properties === "recorrente" &&
    info[properties] === "Sim" &&
    info2[properties] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[properties] + " e " + info2[properties]);
  }
}
