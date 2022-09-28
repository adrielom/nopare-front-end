export type IRevendedores = {
    id: number,
    title: string,
    phone: string,
    address: string,
    state: string,
    isChecked: boolean,
    position: number[],
}

export const revendedores = [
    {
        id: 1,
        title: "PRESTIGE BLINDAGENS",
        phone: "(85) 3257-1122",
        address: "Av. Heráclito Graça, 550 - Centro, Fortaleza - CE, 60140-060",
        state: "Ceará",
        isChecked: false,
        position: [-3.7349577642483394, -38.51965191607649]
    },
    {
        id: 2,
        title: "DUO BLINDAGENS",
        phone: "(85) 3219-0448",
        address: "Av. Alberto Craveiro, 555 - Dias Macedo, Fortaleza - CE, 60860-000",
        state: "Ceará",
        isChecked: false,
        position: [-3.7838971883219745, -38.51656356025783]
    },
    {
        id: 3,
        title: "DEFENZA BLINDAGENS",
        phone: "(85) 3104-4141",
        address: "R. Ramos Botelho, 88 - Papicu, Fortaleza - CE, 60175-265",
        state: "Ceará",
        isChecked: false,
        position: [-3.7334900759828082, -38.4825235179305]
    },
    {
        id: 4,
        title: "LOCKER BLINDAGENS",
        phone: "(85) 98103-1717",
        address: "R. Argemiro Carvalho, 89 - Vicente Pinzon, Fortaleza - CE, 60181-085",
        state: "Ceará",
        isChecked: false,
        position: [-3.7293388260635347, -38.479838302585286]
    },
    {
        id: 5,
        title: "CYRO CAVALCANTI",
        phone: "(84) 3615-7003",
        address: "Av prudente de morais 3140 - Lagoa seca, Natal – RN, 59022-305"    ,
        state: "Rio Grande do Norte",
        isChecked: false,
        position: [-5.80976610523856, -35.209823902577305]
    },
    {
        id: 6,
        title: "MINAS RODAS",
        phone: "(91) 3266-2806",
        address: "Av. Doutor Freitas, 408 - Sacramenta, Belém - PA, 66123-050"    ,
        state: "Pará",
        isChecked: false,
        position: [-1.4131570108099967, -48.47012773142655]
    },
    {
        id: 7,
        title: "POLLARIS BLINDAGENS",
        phone: "(91) 3120-9880",
        address: "Av. José Bonifácio, 37 - São Braz, Belém - PA, 66090-363"    ,
        state: "Pará",
        isChecked: false,
        position: [-1.4451806142268484, -48.468977873753744]
    },
    {
        id: 8,
        title: "AROSPORT",
        phone: "(86) 3142-0965",
        address: "Av. Doutor Freitas, 408 - Sacramenta, Belém - PA, 66123-050"    ,
        state: "Piauí",
        isChecked: false,
        position: [-1.4132213642453557, -48.47011700259026]
    },
    {
        id: 9,
        title: "TARGET BLINDAGENS",
        phone: "(81) 3019-7074",
        address: "R. Joaquim Bandeira, 136 - Imbiribeira, Recife - PE, 51150-410"    ,
        state: "Pernambuco",
        isChecked: false,
        position: [-8.110275635821198, -34.91118244489197]
    },
    {
        id: 10,
        title: "DIAS SOLUÇÕES AUTOMOTIVAS",
        phone: "(62) 3313-4359",
        address: "Av. Brasil Sul, 4163 - Jardim Miguel, Anápolis - GO, 75124-145"    ,
        state: "Goiás",
        isChecked: false,
        position: [-16.361192395739824, -48.96143082946604]
    },
    {
        id: 11,
        title: "GLOBAL TECH BLINDAGENS",
        phone: "(71) 3123-4444",
        address: "Rua 15 de Janeiro Quadra 06 Lote 121 Recreio do - Ipitanga, BA, 42700-300"    ,
        state: "Bahia",
        isChecked: false,
        position: [-12.889140896360546, -38.32672587368798]
    }
] as Array<IRevendedores>;
