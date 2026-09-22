export interface PhotoItem {
  id: string;
  title: string;
  thumbUrl: string;
  fullUrl: string;
}

export interface PhotoCollection {
  id: string;
  title: string;
  client: string;
  year: string;
  driveFolderUrl: string;
  coverImage: string;
  tagline: string;
  photoCount: number;
  photos: PhotoItem[];
}

export const photoCollections: PhotoCollection[] = [
  {
    "id": "photo-hp",
    "title": "HP Singapore Customer Experience & VIP Tour",
    "client": "HP Singapore",
    "year": "2024",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Xx_Bcy3H50YIRi55Js1BiYrGgoQbuBPp?usp=sharing",
    "coverImage": "https://lh3.googleusercontent.com/d/1j_N54ctdh2VQa-KfsIOOx7bsBdObBJsg=w1000",
    "tagline": "Comprehensive corporate photography capturing HP VIP international customer delegacy, innovation lab tour, and executive presentations.",
    "photoCount": 50,
    "photos": [
      {
        "id": "1j_N54ctdh2VQa-KfsIOOx7bsBdObBJsg",
        "title": "HP-001.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1j_N54ctdh2VQa-KfsIOOx7bsBdObBJsg=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1j_N54ctdh2VQa-KfsIOOx7bsBdObBJsg=w1920"
      },
      {
        "id": "1cdSbl3vFVLyunBkGtRylU83i82f3rIbF",
        "title": "HP-002.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cdSbl3vFVLyunBkGtRylU83i82f3rIbF=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cdSbl3vFVLyunBkGtRylU83i82f3rIbF=w1920"
      },
      {
        "id": "1uaM9bydwBJvDSvioANEAUSmL2Sx7g5Wi",
        "title": "HP-003.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uaM9bydwBJvDSvioANEAUSmL2Sx7g5Wi=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uaM9bydwBJvDSvioANEAUSmL2Sx7g5Wi=w1920"
      },
      {
        "id": "1LC82La4XkrW-FnPpkII29B3xwjzPfpBc",
        "title": "HP-004.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LC82La4XkrW-FnPpkII29B3xwjzPfpBc=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LC82La4XkrW-FnPpkII29B3xwjzPfpBc=w1920"
      },
      {
        "id": "1pOuuGyfEQ7Q7pE46ghJgPBQARxIu_MlW",
        "title": "HP-005.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pOuuGyfEQ7Q7pE46ghJgPBQARxIu_MlW=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pOuuGyfEQ7Q7pE46ghJgPBQARxIu_MlW=w1920"
      },
      {
        "id": "1Rc2jZ2Qd6XSLBpfu67e7iB4x6Pu0fJCy",
        "title": "HP-006.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Rc2jZ2Qd6XSLBpfu67e7iB4x6Pu0fJCy=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Rc2jZ2Qd6XSLBpfu67e7iB4x6Pu0fJCy=w1920"
      },
      {
        "id": "1pKstfe_rfkRRrZdbUzsmZZJik3dRkB_T",
        "title": "HP-007.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1pKstfe_rfkRRrZdbUzsmZZJik3dRkB_T=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1pKstfe_rfkRRrZdbUzsmZZJik3dRkB_T=w1920"
      },
      {
        "id": "1Y1x-JX5331kqV8IBm5tKg3fCjLFRHWt9",
        "title": "HP-008.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Y1x-JX5331kqV8IBm5tKg3fCjLFRHWt9=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Y1x-JX5331kqV8IBm5tKg3fCjLFRHWt9=w1920"
      },
      {
        "id": "1iQb8iH6SXq1pva30QzxgUJnBO4LACe2L",
        "title": "HP-009.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iQb8iH6SXq1pva30QzxgUJnBO4LACe2L=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iQb8iH6SXq1pva30QzxgUJnBO4LACe2L=w1920"
      },
      {
        "id": "1nOiPU0i-bQDHlUOMZF1lW1cX37oCp9C4",
        "title": "HP-010.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nOiPU0i-bQDHlUOMZF1lW1cX37oCp9C4=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nOiPU0i-bQDHlUOMZF1lW1cX37oCp9C4=w1920"
      },
      {
        "id": "10bcZIdFHnqTvdZBG8Vnaye1I80I_ym7t",
        "title": "HP-011.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10bcZIdFHnqTvdZBG8Vnaye1I80I_ym7t=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/10bcZIdFHnqTvdZBG8Vnaye1I80I_ym7t=w1920"
      },
      {
        "id": "1MQVoxmbFeuNFFotABG4Qizpl4xOI42xm",
        "title": "HP-012.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MQVoxmbFeuNFFotABG4Qizpl4xOI42xm=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MQVoxmbFeuNFFotABG4Qizpl4xOI42xm=w1920"
      },
      {
        "id": "11HHG1UGb6sBoLLEtJFTinOF5VNb2mAWj",
        "title": "HP-013.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11HHG1UGb6sBoLLEtJFTinOF5VNb2mAWj=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/11HHG1UGb6sBoLLEtJFTinOF5VNb2mAWj=w1920"
      },
      {
        "id": "1Efn1QXyjkAN3yaCxYAN3RouOuBrXBLM2",
        "title": "HP-014.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Efn1QXyjkAN3yaCxYAN3RouOuBrXBLM2=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Efn1QXyjkAN3yaCxYAN3RouOuBrXBLM2=w1920"
      },
      {
        "id": "1E7ZJwaeF2sTkfEMUzzg8zoaIqpT5ckUn",
        "title": "HP-015.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1E7ZJwaeF2sTkfEMUzzg8zoaIqpT5ckUn=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1E7ZJwaeF2sTkfEMUzzg8zoaIqpT5ckUn=w1920"
      },
      {
        "id": "1L32xeVsqZTrKF6vGhvjS3M2yvMo5tXOo",
        "title": "HP-016.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1L32xeVsqZTrKF6vGhvjS3M2yvMo5tXOo=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1L32xeVsqZTrKF6vGhvjS3M2yvMo5tXOo=w1920"
      },
      {
        "id": "1bi8U1oSi0_rkxGVWcxVWsw8Q6TCcuulR",
        "title": "HP-017.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bi8U1oSi0_rkxGVWcxVWsw8Q6TCcuulR=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bi8U1oSi0_rkxGVWcxVWsw8Q6TCcuulR=w1920"
      },
      {
        "id": "1EA4rTnF25-ltEBBesim5sgYlNVq6manp",
        "title": "HP-018.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EA4rTnF25-ltEBBesim5sgYlNVq6manp=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EA4rTnF25-ltEBBesim5sgYlNVq6manp=w1920"
      },
      {
        "id": "1xOUeIfxNg2gePqpDHIYKtSECkPRQCbns",
        "title": "HP-019.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xOUeIfxNg2gePqpDHIYKtSECkPRQCbns=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xOUeIfxNg2gePqpDHIYKtSECkPRQCbns=w1920"
      },
      {
        "id": "1EmmbcUe9ahjt1X1ZeYKUEh_rpzm83brl",
        "title": "HP-020.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EmmbcUe9ahjt1X1ZeYKUEh_rpzm83brl=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EmmbcUe9ahjt1X1ZeYKUEh_rpzm83brl=w1920"
      },
      {
        "id": "1WphrlJbnrlUZiNWw4UagvkTjAXapl52e",
        "title": "HP-021.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1WphrlJbnrlUZiNWw4UagvkTjAXapl52e=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1WphrlJbnrlUZiNWw4UagvkTjAXapl52e=w1920"
      },
      {
        "id": "1TWzAVriv-8k7lcsudxNyynW0PH_Gg7-0",
        "title": "HP-022.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TWzAVriv-8k7lcsudxNyynW0PH_Gg7-0=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TWzAVriv-8k7lcsudxNyynW0PH_Gg7-0=w1920"
      },
      {
        "id": "1fbR5lgza8jqhBgQdvxFxFJ4hCYrLo-KS",
        "title": "HP-023.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fbR5lgza8jqhBgQdvxFxFJ4hCYrLo-KS=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fbR5lgza8jqhBgQdvxFxFJ4hCYrLo-KS=w1920"
      },
      {
        "id": "1duKVNoGvAo2k8w8xd3fA8LPtUoDt5eSS",
        "title": "HP-024.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1duKVNoGvAo2k8w8xd3fA8LPtUoDt5eSS=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1duKVNoGvAo2k8w8xd3fA8LPtUoDt5eSS=w1920"
      },
      {
        "id": "1rz-2OnjYdtbXJDGrN5GYKypkvqrxEiTN",
        "title": "HP-025.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rz-2OnjYdtbXJDGrN5GYKypkvqrxEiTN=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rz-2OnjYdtbXJDGrN5GYKypkvqrxEiTN=w1920"
      },
      {
        "id": "19Abs0QHYQZshDh-SbFOVK8UZKzRnRoLE",
        "title": "HP-026.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19Abs0QHYQZshDh-SbFOVK8UZKzRnRoLE=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/19Abs0QHYQZshDh-SbFOVK8UZKzRnRoLE=w1920"
      },
      {
        "id": "19t98eFocLVrnflHpIzI2rqr-YXLT9MzZ",
        "title": "HP-027.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19t98eFocLVrnflHpIzI2rqr-YXLT9MzZ=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/19t98eFocLVrnflHpIzI2rqr-YXLT9MzZ=w1920"
      },
      {
        "id": "1YInyIFZ5we_u_8SjOBBQ2wEIT_zyutc_",
        "title": "HP-028.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YInyIFZ5we_u_8SjOBBQ2wEIT_zyutc_=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YInyIFZ5we_u_8SjOBBQ2wEIT_zyutc_=w1920"
      },
      {
        "id": "1tLV7CbIzhG2UxEAqnv7FacyF2hNwctxr",
        "title": "HP-029.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tLV7CbIzhG2UxEAqnv7FacyF2hNwctxr=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tLV7CbIzhG2UxEAqnv7FacyF2hNwctxr=w1920"
      },
      {
        "id": "16VyLldr2wxAX-rByu9kcfyCB5Vw-touS",
        "title": "HP-030.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16VyLldr2wxAX-rByu9kcfyCB5Vw-touS=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/16VyLldr2wxAX-rByu9kcfyCB5Vw-touS=w1920"
      },
      {
        "id": "1exUXoHuBjdW0uzolJXX2XrbUK1bV0hZC",
        "title": "HP-031.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1exUXoHuBjdW0uzolJXX2XrbUK1bV0hZC=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1exUXoHuBjdW0uzolJXX2XrbUK1bV0hZC=w1920"
      },
      {
        "id": "1cRPVruKyH7waQGB4cSLZtmomUyYkfw8I",
        "title": "HP-032.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cRPVruKyH7waQGB4cSLZtmomUyYkfw8I=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cRPVruKyH7waQGB4cSLZtmomUyYkfw8I=w1920"
      },
      {
        "id": "16ZPOCs77QFkfjt0_Y81bXZBBoTKbicPv",
        "title": "HP-033.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16ZPOCs77QFkfjt0_Y81bXZBBoTKbicPv=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/16ZPOCs77QFkfjt0_Y81bXZBBoTKbicPv=w1920"
      },
      {
        "id": "1AK6HVTMqKd5RcwBuBMIqsHpzXY3YYYEz",
        "title": "HP-034.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AK6HVTMqKd5RcwBuBMIqsHpzXY3YYYEz=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AK6HVTMqKd5RcwBuBMIqsHpzXY3YYYEz=w1920"
      },
      {
        "id": "1E2fyYlPPgr7-uJKW-yrjmrK0URGF2yOn",
        "title": "HP-035.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1E2fyYlPPgr7-uJKW-yrjmrK0URGF2yOn=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1E2fyYlPPgr7-uJKW-yrjmrK0URGF2yOn=w1920"
      },
      {
        "id": "1iN1sQvH4O9jvsExnxyoISzo7a03P6soT",
        "title": "HP-036.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iN1sQvH4O9jvsExnxyoISzo7a03P6soT=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iN1sQvH4O9jvsExnxyoISzo7a03P6soT=w1920"
      },
      {
        "id": "1IxvJ7I8QONo0DGnGYXh_ZoP6_kVhaund",
        "title": "HP-037.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IxvJ7I8QONo0DGnGYXh_ZoP6_kVhaund=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IxvJ7I8QONo0DGnGYXh_ZoP6_kVhaund=w1920"
      },
      {
        "id": "1XcepszbUI1Xz-zaEWecwQ4RvXPMRl332",
        "title": "HP-038.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XcepszbUI1Xz-zaEWecwQ4RvXPMRl332=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XcepszbUI1Xz-zaEWecwQ4RvXPMRl332=w1920"
      },
      {
        "id": "1qtYTl9qDKLC6N5rrAdRufHkuJoxEliyp",
        "title": "HP-039.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qtYTl9qDKLC6N5rrAdRufHkuJoxEliyp=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qtYTl9qDKLC6N5rrAdRufHkuJoxEliyp=w1920"
      },
      {
        "id": "1-4qWgE3wmhQAYe66YdYZPt9Bpe7KOS9f",
        "title": "HP-040.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-4qWgE3wmhQAYe66YdYZPt9Bpe7KOS9f=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-4qWgE3wmhQAYe66YdYZPt9Bpe7KOS9f=w1920"
      },
      {
        "id": "1lYSiyHeRAbEj2nV91RHbBRGMcJLp2TIs",
        "title": "HP-041.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lYSiyHeRAbEj2nV91RHbBRGMcJLp2TIs=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lYSiyHeRAbEj2nV91RHbBRGMcJLp2TIs=w1920"
      },
      {
        "id": "1ds5IgEmxr0bzLfMobu6nhR8m_B3c_kvb",
        "title": "HP-042.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ds5IgEmxr0bzLfMobu6nhR8m_B3c_kvb=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ds5IgEmxr0bzLfMobu6nhR8m_B3c_kvb=w1920"
      },
      {
        "id": "1xhK0yn7qLNMYgITEZYujVpB9jO8FEC1e",
        "title": "HP-043.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xhK0yn7qLNMYgITEZYujVpB9jO8FEC1e=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xhK0yn7qLNMYgITEZYujVpB9jO8FEC1e=w1920"
      },
      {
        "id": "1Vxsr-FCNTBvPmTqWNzckfXJUagBJPzxC",
        "title": "HP-044.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Vxsr-FCNTBvPmTqWNzckfXJUagBJPzxC=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Vxsr-FCNTBvPmTqWNzckfXJUagBJPzxC=w1920"
      },
      {
        "id": "1FDaDlQ7P9fL8QVVo1Dv1UXJWSPktC9tE",
        "title": "HP-045.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FDaDlQ7P9fL8QVVo1Dv1UXJWSPktC9tE=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FDaDlQ7P9fL8QVVo1Dv1UXJWSPktC9tE=w1920"
      },
      {
        "id": "1nEBkayA9sj5bIaSTzrZq24zO0pBkTUnu",
        "title": "HP-046.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nEBkayA9sj5bIaSTzrZq24zO0pBkTUnu=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nEBkayA9sj5bIaSTzrZq24zO0pBkTUnu=w1920"
      },
      {
        "id": "1YbY-WipjN399teF0dlLCKj4I79LymvPp",
        "title": "HP-047.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YbY-WipjN399teF0dlLCKj4I79LymvPp=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YbY-WipjN399teF0dlLCKj4I79LymvPp=w1920"
      },
      {
        "id": "1ui4pxq6FJ2pmnGLKaaq207_4DG351A5m",
        "title": "HP-048.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ui4pxq6FJ2pmnGLKaaq207_4DG351A5m=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ui4pxq6FJ2pmnGLKaaq207_4DG351A5m=w1920"
      },
      {
        "id": "1qI7dWLUrKIl2G69NpEcwY5nCO9htKZfK",
        "title": "HP-049.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qI7dWLUrKIl2G69NpEcwY5nCO9htKZfK=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qI7dWLUrKIl2G69NpEcwY5nCO9htKZfK=w1920"
      },
      {
        "id": "1VvEe3Ko30Z71AZgMmkawTdZr_v7Jmtc8",
        "title": "HP-050.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VvEe3Ko30Z71AZgMmkawTdZr_v7Jmtc8=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VvEe3Ko30Z71AZgMmkawTdZr_v7Jmtc8=w1920"
      }
    ]
  },
  {
    "id": "photo-accomplish",
    "title": "Accomplish 2024 Leadership Summit",
    "client": "Accomplish Global",
    "year": "2024",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1NSp7CyOx7IPSBwgZUl6kJL6xCW1OVmu4?usp=sharing",
    "coverImage": "https://lh3.googleusercontent.com/d/1TLBNPtZaJg0tLl7ZJVqD31-fuJngu5v8=w1000",
    "tagline": "High-impact conference photojournalism documenting executive keynotes, panel discussions, and milestone achievement awards.",
    "photoCount": 10,
    "photos": [
      {
        "id": "1TLBNPtZaJg0tLl7ZJVqD31-fuJngu5v8",
        "title": "Accomplish-1.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TLBNPtZaJg0tLl7ZJVqD31-fuJngu5v8=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TLBNPtZaJg0tLl7ZJVqD31-fuJngu5v8=w1920"
      },
      {
        "id": "1xL_3MovITcazjPL8nvMrDSvFtog1XArH",
        "title": "Accomplish-2.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xL_3MovITcazjPL8nvMrDSvFtog1XArH=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xL_3MovITcazjPL8nvMrDSvFtog1XArH=w1920"
      },
      {
        "id": "1alk_ip6nF7H3h_OpiryY9Z3yxqqvRz38",
        "title": "Accomplish-3.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1alk_ip6nF7H3h_OpiryY9Z3yxqqvRz38=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1alk_ip6nF7H3h_OpiryY9Z3yxqqvRz38=w1920"
      },
      {
        "id": "156UzgizTTfC5zdC-K_TScUjABLm_Qguh",
        "title": "Accomplish-4.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/156UzgizTTfC5zdC-K_TScUjABLm_Qguh=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/156UzgizTTfC5zdC-K_TScUjABLm_Qguh=w1920"
      },
      {
        "id": "1p_i29Dc4IdcFG8qCFSCubKCcQIUzIsSO",
        "title": "Accomplish-6.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1p_i29Dc4IdcFG8qCFSCubKCcQIUzIsSO=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1p_i29Dc4IdcFG8qCFSCubKCcQIUzIsSO=w1920"
      },
      {
        "id": "1uBIYhe4UpR4T3xYO_pZJ4G9GQsz4tTZV",
        "title": "Accomplish-7.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uBIYhe4UpR4T3xYO_pZJ4G9GQsz4tTZV=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uBIYhe4UpR4T3xYO_pZJ4G9GQsz4tTZV=w1920"
      },
      {
        "id": "1Z8VJFtRekEVlwP_KOGYut9XGK7thqoyp",
        "title": "Accomplish-8.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Z8VJFtRekEVlwP_KOGYut9XGK7thqoyp=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Z8VJFtRekEVlwP_KOGYut9XGK7thqoyp=w1920"
      },
      {
        "id": "1ogATFm8q524TQqmp1-5bVN9do00v4-Aj",
        "title": "Accomplish-9.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ogATFm8q524TQqmp1-5bVN9do00v4-Aj=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ogATFm8q524TQqmp1-5bVN9do00v4-Aj=w1920"
      },
      {
        "id": "12qkhpleOnK6LaupzNAmX8crJaDsNP5YU",
        "title": "Accomplish-10.(PS).jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12qkhpleOnK6LaupzNAmX8crJaDsNP5YU=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/12qkhpleOnK6LaupzNAmX8crJaDsNP5YU=w1920"
      },
      {
        "id": "1ONFCjMecCMr7_Z5TiY2noNL0sNc5eLtP",
        "title": "Accomplish-22.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ONFCjMecCMr7_Z5TiY2noNL0sNc5eLtP=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ONFCjMecCMr7_Z5TiY2noNL0sNc5eLtP=w1920"
      }
    ]
  },
  {
    "id": "photo-afterlife",
    "title": "AfterLife Electronic Festival & Nightlife",
    "client": "AfterLife Asia",
    "year": "2023",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1_PZgwKNQesKOhZlwAS4k_PNRRSOl_sii?usp=sharing",
    "coverImage": "https://lh3.googleusercontent.com/d/1r5z8OZQ5TVJxfC5uut4xzvSCDB1oxUSL=w1000",
    "tagline": "Atmospheric nightlife and music festival visual journalism highlighting breathtaking stage design, laser effects, and partygoers.",
    "photoCount": 50,
    "photos": [
      {
        "id": "1r5z8OZQ5TVJxfC5uut4xzvSCDB1oxUSL",
        "title": "DSC05344.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1r5z8OZQ5TVJxfC5uut4xzvSCDB1oxUSL=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1r5z8OZQ5TVJxfC5uut4xzvSCDB1oxUSL=w1920"
      },
      {
        "id": "1llnK73XsyLVnBgBeyNZG2MYWaleL_j5u",
        "title": "DSC05358.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1llnK73XsyLVnBgBeyNZG2MYWaleL_j5u=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1llnK73XsyLVnBgBeyNZG2MYWaleL_j5u=w1920"
      },
      {
        "id": "1EA34TVzkuMA-jZaQ9my8ttXXFYvIoR_N",
        "title": "DSC05396.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EA34TVzkuMA-jZaQ9my8ttXXFYvIoR_N=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EA34TVzkuMA-jZaQ9my8ttXXFYvIoR_N=w1920"
      },
      {
        "id": "1qhT_h2Um1Cs6jcTnC7mzMhhF_Tl4Sn3X",
        "title": "DSC05396a.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qhT_h2Um1Cs6jcTnC7mzMhhF_Tl4Sn3X=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qhT_h2Um1Cs6jcTnC7mzMhhF_Tl4Sn3X=w1920"
      },
      {
        "id": "1CohTKb-sTCMy3LrzEaKA4uJBxf6GJ5cI",
        "title": "DSC05396b.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CohTKb-sTCMy3LrzEaKA4uJBxf6GJ5cI=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CohTKb-sTCMy3LrzEaKA4uJBxf6GJ5cI=w1920"
      },
      {
        "id": "1odvWirpiySGxy0wa-oPMXYXr4k0NxIC0",
        "title": "DSC05411.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1odvWirpiySGxy0wa-oPMXYXr4k0NxIC0=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1odvWirpiySGxy0wa-oPMXYXr4k0NxIC0=w1920"
      },
      {
        "id": "1avXskIGW58cLn3XMtzV-mL-wQ9LZc4is",
        "title": "DSC05420.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1avXskIGW58cLn3XMtzV-mL-wQ9LZc4is=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1avXskIGW58cLn3XMtzV-mL-wQ9LZc4is=w1920"
      },
      {
        "id": "1qMwL-qacFPyqjADFBB5mGuIUDuzLwah4",
        "title": "DSC05424.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qMwL-qacFPyqjADFBB5mGuIUDuzLwah4=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qMwL-qacFPyqjADFBB5mGuIUDuzLwah4=w1920"
      },
      {
        "id": "1l1UCCtleXiJncKSddyjk6203SOrD6eJe",
        "title": "DSC05433.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1l1UCCtleXiJncKSddyjk6203SOrD6eJe=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1l1UCCtleXiJncKSddyjk6203SOrD6eJe=w1920"
      },
      {
        "id": "195FsVH0rPNZ3Dh0euzGmzoJ1RHJ5kwsl",
        "title": "DSC05451.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/195FsVH0rPNZ3Dh0euzGmzoJ1RHJ5kwsl=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/195FsVH0rPNZ3Dh0euzGmzoJ1RHJ5kwsl=w1920"
      },
      {
        "id": "1SP6vCJWZySdmpM3Wg6rkXQxpuuJS1Uzb",
        "title": "DSC05459.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SP6vCJWZySdmpM3Wg6rkXQxpuuJS1Uzb=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SP6vCJWZySdmpM3Wg6rkXQxpuuJS1Uzb=w1920"
      },
      {
        "id": "1Nv8wbKTaGkVQU5zrteOK4EvxKpLEIx4S",
        "title": "DSC05463.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Nv8wbKTaGkVQU5zrteOK4EvxKpLEIx4S=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Nv8wbKTaGkVQU5zrteOK4EvxKpLEIx4S=w1920"
      },
      {
        "id": "17WaXpJTfsx3zq13GTR7rtrUztuLoGPtA",
        "title": "DSC05474.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17WaXpJTfsx3zq13GTR7rtrUztuLoGPtA=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/17WaXpJTfsx3zq13GTR7rtrUztuLoGPtA=w1920"
      },
      {
        "id": "1twqLAP25RLhfRA9uglaUMbaEbfdkScsh",
        "title": "DSC05476.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1twqLAP25RLhfRA9uglaUMbaEbfdkScsh=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1twqLAP25RLhfRA9uglaUMbaEbfdkScsh=w1920"
      },
      {
        "id": "1xXpFPpEXVKxZ0U45hJiqAdOo4884VW4M",
        "title": "DSC05491.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xXpFPpEXVKxZ0U45hJiqAdOo4884VW4M=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xXpFPpEXVKxZ0U45hJiqAdOo4884VW4M=w1920"
      },
      {
        "id": "15RMQNkFnh8FPKRVhBRsm_Fa3f2RGUgS9",
        "title": "DSC05496.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15RMQNkFnh8FPKRVhBRsm_Fa3f2RGUgS9=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/15RMQNkFnh8FPKRVhBRsm_Fa3f2RGUgS9=w1920"
      },
      {
        "id": "1sYMF3qlUgUAt4nyfw181aEy3i-a8SGi2",
        "title": "DSC05503.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sYMF3qlUgUAt4nyfw181aEy3i-a8SGi2=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sYMF3qlUgUAt4nyfw181aEy3i-a8SGi2=w1920"
      },
      {
        "id": "1qM39r3kLr0QtAjBpxGiEHoyBEh9SAB-o",
        "title": "DSC05508.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qM39r3kLr0QtAjBpxGiEHoyBEh9SAB-o=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qM39r3kLr0QtAjBpxGiEHoyBEh9SAB-o=w1920"
      },
      {
        "id": "1CZCh6mWD6z03MbnU-JMF-rKfjyywzggf",
        "title": "DSC05512.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CZCh6mWD6z03MbnU-JMF-rKfjyywzggf=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CZCh6mWD6z03MbnU-JMF-rKfjyywzggf=w1920"
      },
      {
        "id": "1IehliSRNZLImA5WIaf5sF_jWtvucLGvB",
        "title": "DSC05514.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IehliSRNZLImA5WIaf5sF_jWtvucLGvB=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IehliSRNZLImA5WIaf5sF_jWtvucLGvB=w1920"
      },
      {
        "id": "1lbg80krHh1e7yS83HGPMBgDw4iF5GPeB",
        "title": "DSC05516.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lbg80krHh1e7yS83HGPMBgDw4iF5GPeB=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lbg80krHh1e7yS83HGPMBgDw4iF5GPeB=w1920"
      },
      {
        "id": "1K49ZmlvUtu1QWMeSZJyKb1OSG4diNkDW",
        "title": "DSC05522.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1K49ZmlvUtu1QWMeSZJyKb1OSG4diNkDW=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1K49ZmlvUtu1QWMeSZJyKb1OSG4diNkDW=w1920"
      },
      {
        "id": "1-_ngUru85b99B8RqmbIYbaIuBdcwa60C",
        "title": "DSC05526.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-_ngUru85b99B8RqmbIYbaIuBdcwa60C=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-_ngUru85b99B8RqmbIYbaIuBdcwa60C=w1920"
      },
      {
        "id": "1SldK-6pl9XQQ5Zh7QyWAtC6pTh8a1NLx",
        "title": "DSC05529.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SldK-6pl9XQQ5Zh7QyWAtC6pTh8a1NLx=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SldK-6pl9XQQ5Zh7QyWAtC6pTh8a1NLx=w1920"
      },
      {
        "id": "189Amq3knq00ZS2WRUaQSAIOckYlaQZBG",
        "title": "DSC05542.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/189Amq3knq00ZS2WRUaQSAIOckYlaQZBG=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/189Amq3knq00ZS2WRUaQSAIOckYlaQZBG=w1920"
      },
      {
        "id": "13EuaYtLz89luS5UfUF-NcqseopHpA_EW",
        "title": "DSC05544.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13EuaYtLz89luS5UfUF-NcqseopHpA_EW=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/13EuaYtLz89luS5UfUF-NcqseopHpA_EW=w1920"
      },
      {
        "id": "11J5uz6O0QYScqql3UCfYEeZd0hJqp1oa",
        "title": "DSC05559.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11J5uz6O0QYScqql3UCfYEeZd0hJqp1oa=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/11J5uz6O0QYScqql3UCfYEeZd0hJqp1oa=w1920"
      },
      {
        "id": "1s8Giga_lDAVnFu395pDNrPWUca6rBYVn",
        "title": "DSC05564.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1s8Giga_lDAVnFu395pDNrPWUca6rBYVn=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1s8Giga_lDAVnFu395pDNrPWUca6rBYVn=w1920"
      },
      {
        "id": "1TlM1YpMq8OPXrNarFpFi9jGKS0xXsErb",
        "title": "DSC05567.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TlM1YpMq8OPXrNarFpFi9jGKS0xXsErb=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TlM1YpMq8OPXrNarFpFi9jGKS0xXsErb=w1920"
      },
      {
        "id": "1oEn58c9Ysf19iY4Jgn779z3dvzspflZU",
        "title": "DSC05572.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oEn58c9Ysf19iY4Jgn779z3dvzspflZU=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oEn58c9Ysf19iY4Jgn779z3dvzspflZU=w1920"
      },
      {
        "id": "1BK-KxKWiDU5OebUDUvLgbRMeObxUKyIE",
        "title": "DSC05575.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1BK-KxKWiDU5OebUDUvLgbRMeObxUKyIE=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1BK-KxKWiDU5OebUDUvLgbRMeObxUKyIE=w1920"
      },
      {
        "id": "1YbhjY3-TFEBx7wEte3r4kglus-l-Z4UI",
        "title": "DSC05579.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YbhjY3-TFEBx7wEte3r4kglus-l-Z4UI=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YbhjY3-TFEBx7wEte3r4kglus-l-Z4UI=w1920"
      },
      {
        "id": "1u89oRXN9IWV_ootoQ6hhtToP2hLidq0N",
        "title": "DSC05583.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1u89oRXN9IWV_ootoQ6hhtToP2hLidq0N=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1u89oRXN9IWV_ootoQ6hhtToP2hLidq0N=w1920"
      },
      {
        "id": "1YgAxvznDsZnZg5WfJIgBAMTyYu50raHM",
        "title": "DSC05585.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YgAxvznDsZnZg5WfJIgBAMTyYu50raHM=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YgAxvznDsZnZg5WfJIgBAMTyYu50raHM=w1920"
      },
      {
        "id": "10jLNn3Ra7qG9LOErchq7O7sAxFJ0v9I6",
        "title": "DSC05586.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10jLNn3Ra7qG9LOErchq7O7sAxFJ0v9I6=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/10jLNn3Ra7qG9LOErchq7O7sAxFJ0v9I6=w1920"
      },
      {
        "id": "10bydFX-vcq40UJv5vhu9Io9URkvXfvCt",
        "title": "DSC05587.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10bydFX-vcq40UJv5vhu9Io9URkvXfvCt=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/10bydFX-vcq40UJv5vhu9Io9URkvXfvCt=w1920"
      },
      {
        "id": "1KY3jBRWQLxg6xtoyactTHYnTZ1FfEcej",
        "title": "DSC05588.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KY3jBRWQLxg6xtoyactTHYnTZ1FfEcej=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KY3jBRWQLxg6xtoyactTHYnTZ1FfEcej=w1920"
      },
      {
        "id": "1A7IfCAQYgfB7PFdmGTFM2868AcdTBQZN",
        "title": "DSC05591.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1A7IfCAQYgfB7PFdmGTFM2868AcdTBQZN=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1A7IfCAQYgfB7PFdmGTFM2868AcdTBQZN=w1920"
      },
      {
        "id": "1ggTUfN9OcckGqAZaZiDenOCp9ZD0AhqI",
        "title": "DSC05592.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ggTUfN9OcckGqAZaZiDenOCp9ZD0AhqI=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ggTUfN9OcckGqAZaZiDenOCp9ZD0AhqI=w1920"
      },
      {
        "id": "1sZ3mPWBSd6pbpcPrpwQv97A1WsgbE0H_",
        "title": "DSC05600.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sZ3mPWBSd6pbpcPrpwQv97A1WsgbE0H_=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sZ3mPWBSd6pbpcPrpwQv97A1WsgbE0H_=w1920"
      },
      {
        "id": "1JzGnwcjsTGWgZ-84WqHGw0eBOhkMuhnd",
        "title": "DSC05601.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1JzGnwcjsTGWgZ-84WqHGw0eBOhkMuhnd=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1JzGnwcjsTGWgZ-84WqHGw0eBOhkMuhnd=w1920"
      },
      {
        "id": "1kZ5HUd08RLllDyX2PqwEAuRmEcLLlHMR",
        "title": "DSC05606.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kZ5HUd08RLllDyX2PqwEAuRmEcLLlHMR=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kZ5HUd08RLllDyX2PqwEAuRmEcLLlHMR=w1920"
      },
      {
        "id": "1YzMs8gw__R1_Eq4_kFZFwvP-NF_IrIZ0",
        "title": "DSC05610.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YzMs8gw__R1_Eq4_kFZFwvP-NF_IrIZ0=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YzMs8gw__R1_Eq4_kFZFwvP-NF_IrIZ0=w1920"
      },
      {
        "id": "1IDXOoPzDf98_v8mMJpKuxhKXUnRepT5c",
        "title": "DSC05615.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IDXOoPzDf98_v8mMJpKuxhKXUnRepT5c=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IDXOoPzDf98_v8mMJpKuxhKXUnRepT5c=w1920"
      },
      {
        "id": "1t6DT63ngP8dWOzEUZRrWwCNWegU6xlR9",
        "title": "DSC05630.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t6DT63ngP8dWOzEUZRrWwCNWegU6xlR9=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t6DT63ngP8dWOzEUZRrWwCNWegU6xlR9=w1920"
      },
      {
        "id": "1eTJbUIIN2QbyBbmIQptLgvW8D4fZcl8g",
        "title": "DSC05633.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eTJbUIIN2QbyBbmIQptLgvW8D4fZcl8g=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eTJbUIIN2QbyBbmIQptLgvW8D4fZcl8g=w1920"
      },
      {
        "id": "1B2PkoVo7-hpjfwMCgpbKdBk5-RnXX8z3",
        "title": "DSC05634.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1B2PkoVo7-hpjfwMCgpbKdBk5-RnXX8z3=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1B2PkoVo7-hpjfwMCgpbKdBk5-RnXX8z3=w1920"
      },
      {
        "id": "17648N6Tz4USZCedusxwqB0l2FbxsCN5e",
        "title": "DSC05640.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17648N6Tz4USZCedusxwqB0l2FbxsCN5e=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/17648N6Tz4USZCedusxwqB0l2FbxsCN5e=w1920"
      },
      {
        "id": "1G9ta_ixRs84u12N3SKdCxeW4-4-DitPT",
        "title": "DSC05642.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1G9ta_ixRs84u12N3SKdCxeW4-4-DitPT=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1G9ta_ixRs84u12N3SKdCxeW4-4-DitPT=w1920"
      },
      {
        "id": "1v3nKZP2vaOkRx_542aOTeX-A7jVGssVb",
        "title": "DSC05654.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1v3nKZP2vaOkRx_542aOTeX-A7jVGssVb=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1v3nKZP2vaOkRx_542aOTeX-A7jVGssVb=w1920"
      }
    ]
  },
  {
    "id": "photo-staking",
    "title": "Staking Circle Web3 Summit",
    "client": "Staking Circle International",
    "year": "2024",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1Q7X7kO-V2a23uOFNjkiPnSGLlepq8Zi2?usp=sharing",
    "coverImage": "https://lh3.googleusercontent.com/d/1m5YkB6TwO2XEcvwWpSgxhIJDuHiEP-mA=w1000",
    "tagline": "Vibrant blockchain summit event photography covering networking lounges, speaker sessions, and institutional crypto roundtables.",
    "photoCount": 50,
    "photos": [
      {
        "id": "1m5YkB6TwO2XEcvwWpSgxhIJDuHiEP-mA",
        "title": "Staking Circle-01.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1m5YkB6TwO2XEcvwWpSgxhIJDuHiEP-mA=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1m5YkB6TwO2XEcvwWpSgxhIJDuHiEP-mA=w1920"
      },
      {
        "id": "1eI-nBn5QVd5mofjkMCwAj0S5ONjfLyCl",
        "title": "Staking Circle-02.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1eI-nBn5QVd5mofjkMCwAj0S5ONjfLyCl=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1eI-nBn5QVd5mofjkMCwAj0S5ONjfLyCl=w1920"
      },
      {
        "id": "1XSaAEpYpVJuU-c4yMGJ-_un2vpWL3kkk",
        "title": "Staking Circle-03.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1XSaAEpYpVJuU-c4yMGJ-_un2vpWL3kkk=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1XSaAEpYpVJuU-c4yMGJ-_un2vpWL3kkk=w1920"
      },
      {
        "id": "1tQivKpC79HcqvoDvEIOtfpswZHS6F2_1",
        "title": "Staking Circle-04.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tQivKpC79HcqvoDvEIOtfpswZHS6F2_1=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tQivKpC79HcqvoDvEIOtfpswZHS6F2_1=w1920"
      },
      {
        "id": "1CRcB9LwAh8lc0tddkp2JGj-Gj1L8wfFx",
        "title": "Staking Circle-05.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1CRcB9LwAh8lc0tddkp2JGj-Gj1L8wfFx=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1CRcB9LwAh8lc0tddkp2JGj-Gj1L8wfFx=w1920"
      },
      {
        "id": "1YruIOANzBcZyofhgaeJ90CA5GZeblpwq",
        "title": "Staking Circle-06.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YruIOANzBcZyofhgaeJ90CA5GZeblpwq=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YruIOANzBcZyofhgaeJ90CA5GZeblpwq=w1920"
      },
      {
        "id": "1EAgvbeEep-0aIEYXaBX31yaLzexG7oct",
        "title": "Staking Circle-07.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1EAgvbeEep-0aIEYXaBX31yaLzexG7oct=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1EAgvbeEep-0aIEYXaBX31yaLzexG7oct=w1920"
      },
      {
        "id": "1V2t4knoLFEIdVQCdv0TnR1CPLd2wUXwp",
        "title": "Staking Circle-08.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1V2t4knoLFEIdVQCdv0TnR1CPLd2wUXwp=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1V2t4knoLFEIdVQCdv0TnR1CPLd2wUXwp=w1920"
      },
      {
        "id": "1mvarPnUMA4BpY8y2zrAn4UFqHsfQlpOr",
        "title": "Staking Circle-09.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mvarPnUMA4BpY8y2zrAn4UFqHsfQlpOr=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mvarPnUMA4BpY8y2zrAn4UFqHsfQlpOr=w1920"
      },
      {
        "id": "11ge240YQj7lWkZ7IwOvqVY6o-X1gRBG9",
        "title": "Staking Circle-10.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/11ge240YQj7lWkZ7IwOvqVY6o-X1gRBG9=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/11ge240YQj7lWkZ7IwOvqVY6o-X1gRBG9=w1920"
      },
      {
        "id": "1izMX_4DjMokq3hKIQ1QG0e6LUENpnxou",
        "title": "Staking Circle-11.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1izMX_4DjMokq3hKIQ1QG0e6LUENpnxou=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1izMX_4DjMokq3hKIQ1QG0e6LUENpnxou=w1920"
      },
      {
        "id": "1zbOU25ePK6R4EAj3i8sA499Nl2_RnBCM",
        "title": "Staking Circle-12.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zbOU25ePK6R4EAj3i8sA499Nl2_RnBCM=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zbOU25ePK6R4EAj3i8sA499Nl2_RnBCM=w1920"
      },
      {
        "id": "1VR_D_5WvUmw9tJr2LfTfegTWwklqObAI",
        "title": "Staking Circle-13.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VR_D_5WvUmw9tJr2LfTfegTWwklqObAI=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VR_D_5WvUmw9tJr2LfTfegTWwklqObAI=w1920"
      },
      {
        "id": "1vgMNgkBvecDbQDMSy1oUsPr3uxkt0nU4",
        "title": "Staking Circle-14.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1vgMNgkBvecDbQDMSy1oUsPr3uxkt0nU4=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1vgMNgkBvecDbQDMSy1oUsPr3uxkt0nU4=w1920"
      },
      {
        "id": "1sun76-0xXRWudhif8ajVile1EX1j5yLa",
        "title": "Staking Circle-15.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1sun76-0xXRWudhif8ajVile1EX1j5yLa=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1sun76-0xXRWudhif8ajVile1EX1j5yLa=w1920"
      },
      {
        "id": "1qVV0Bk92L9xq6oXzj9Mt83XkNZuIrWDi",
        "title": "Staking Circle-16.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qVV0Bk92L9xq6oXzj9Mt83XkNZuIrWDi=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qVV0Bk92L9xq6oXzj9Mt83XkNZuIrWDi=w1920"
      },
      {
        "id": "1c1ihEC48ZVIfwFeRAqFTJ1stXq1adSif",
        "title": "Staking Circle-17.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1c1ihEC48ZVIfwFeRAqFTJ1stXq1adSif=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1c1ihEC48ZVIfwFeRAqFTJ1stXq1adSif=w1920"
      },
      {
        "id": "1POcgmJ56Nq_NS0803CF5bavU9M8Ftqzy",
        "title": "Staking Circle-18.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1POcgmJ56Nq_NS0803CF5bavU9M8Ftqzy=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1POcgmJ56Nq_NS0803CF5bavU9M8Ftqzy=w1920"
      },
      {
        "id": "1nW16YcrTskjz3CaUv5NjAtGOSDqFCBHT",
        "title": "Staking Circle-19.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nW16YcrTskjz3CaUv5NjAtGOSDqFCBHT=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nW16YcrTskjz3CaUv5NjAtGOSDqFCBHT=w1920"
      },
      {
        "id": "1ToCbETiuzdQ5Gjz_rVUnEGD2tCmf6ImT",
        "title": "Staking Circle-20.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ToCbETiuzdQ5Gjz_rVUnEGD2tCmf6ImT=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ToCbETiuzdQ5Gjz_rVUnEGD2tCmf6ImT=w1920"
      },
      {
        "id": "1oj1ci2vlxZHKktPhiYIRqWeM8v930Hme",
        "title": "Staking Circle-21.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oj1ci2vlxZHKktPhiYIRqWeM8v930Hme=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oj1ci2vlxZHKktPhiYIRqWeM8v930Hme=w1920"
      },
      {
        "id": "1TnahrHBoWUHqQYjV6F3W-C6YolAa1rzf",
        "title": "Staking Circle-22.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TnahrHBoWUHqQYjV6F3W-C6YolAa1rzf=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TnahrHBoWUHqQYjV6F3W-C6YolAa1rzf=w1920"
      },
      {
        "id": "1ieaa-_iqT6N-GB2F0FjA1aCLzYAlP98J",
        "title": "Staking Circle-23.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ieaa-_iqT6N-GB2F0FjA1aCLzYAlP98J=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ieaa-_iqT6N-GB2F0FjA1aCLzYAlP98J=w1920"
      },
      {
        "id": "1t8nc0agupPbux5yelIjCQ3_4tso8USP9",
        "title": "Staking Circle-24.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t8nc0agupPbux5yelIjCQ3_4tso8USP9=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t8nc0agupPbux5yelIjCQ3_4tso8USP9=w1920"
      },
      {
        "id": "1Ds5KZtr9mo4HXfD57Ind5oksZljXtE6h",
        "title": "Staking Circle-25.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ds5KZtr9mo4HXfD57Ind5oksZljXtE6h=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ds5KZtr9mo4HXfD57Ind5oksZljXtE6h=w1920"
      },
      {
        "id": "1I8aTbXK-ywzwyO4ZGhMPWRzqrUm6vtLQ",
        "title": "Staking Circle-26.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1I8aTbXK-ywzwyO4ZGhMPWRzqrUm6vtLQ=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1I8aTbXK-ywzwyO4ZGhMPWRzqrUm6vtLQ=w1920"
      },
      {
        "id": "1QV-be0ovLODRbd2dfCiCB9R3POHFmyOV",
        "title": "Staking Circle-27.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QV-be0ovLODRbd2dfCiCB9R3POHFmyOV=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QV-be0ovLODRbd2dfCiCB9R3POHFmyOV=w1920"
      },
      {
        "id": "1LuOEcuYx8s7xKfORz5W30giW71SS2USk",
        "title": "Staking Circle-28.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1LuOEcuYx8s7xKfORz5W30giW71SS2USk=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1LuOEcuYx8s7xKfORz5W30giW71SS2USk=w1920"
      },
      {
        "id": "1gIlyuWyQkCsWmkvinSYXdyE3P1Ikhz57",
        "title": "Staking Circle-29.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1gIlyuWyQkCsWmkvinSYXdyE3P1Ikhz57=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1gIlyuWyQkCsWmkvinSYXdyE3P1Ikhz57=w1920"
      },
      {
        "id": "1_CYcJ63q5OAlDV4HypOrU95RS5lrOBb2",
        "title": "Staking Circle-30.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1_CYcJ63q5OAlDV4HypOrU95RS5lrOBb2=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1_CYcJ63q5OAlDV4HypOrU95RS5lrOBb2=w1920"
      },
      {
        "id": "1lI9ATjck0pKOqNyIuJvs9IdGU75ys2qq",
        "title": "Staking Circle-31.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lI9ATjck0pKOqNyIuJvs9IdGU75ys2qq=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lI9ATjck0pKOqNyIuJvs9IdGU75ys2qq=w1920"
      },
      {
        "id": "1bmdHcS2X01DIMn8v3M4TdxQ-OK90_KoC",
        "title": "Staking Circle-32.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1bmdHcS2X01DIMn8v3M4TdxQ-OK90_KoC=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1bmdHcS2X01DIMn8v3M4TdxQ-OK90_KoC=w1920"
      },
      {
        "id": "1PRjpJ-11gIhw5U4RDGGBXGh7mpxWKEuS",
        "title": "Staking Circle-33.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1PRjpJ-11gIhw5U4RDGGBXGh7mpxWKEuS=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1PRjpJ-11gIhw5U4RDGGBXGh7mpxWKEuS=w1920"
      },
      {
        "id": "1OU9S9rR3Pyk9Pd9CnSfzref7IuwGV9ra",
        "title": "Staking Circle-34.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1OU9S9rR3Pyk9Pd9CnSfzref7IuwGV9ra=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1OU9S9rR3Pyk9Pd9CnSfzref7IuwGV9ra=w1920"
      },
      {
        "id": "1g_-6kaxuRR4vQvd38Gh40iV_hpl1DKci",
        "title": "Staking Circle-35.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1g_-6kaxuRR4vQvd38Gh40iV_hpl1DKci=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1g_-6kaxuRR4vQvd38Gh40iV_hpl1DKci=w1920"
      },
      {
        "id": "1NUNytl45jehtAVOiBLBiqfy3GYdJs_9U",
        "title": "Staking Circle-36.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NUNytl45jehtAVOiBLBiqfy3GYdJs_9U=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NUNytl45jehtAVOiBLBiqfy3GYdJs_9U=w1920"
      },
      {
        "id": "19yNwuokMxlkLj-sSlZmWNOxtxvQRrV0J",
        "title": "Staking Circle-37.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/19yNwuokMxlkLj-sSlZmWNOxtxvQRrV0J=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/19yNwuokMxlkLj-sSlZmWNOxtxvQRrV0J=w1920"
      },
      {
        "id": "1HYrlkxmm-blKjXdBqnwMUhsYqq3JEC1k",
        "title": "Staking Circle-38.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HYrlkxmm-blKjXdBqnwMUhsYqq3JEC1k=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HYrlkxmm-blKjXdBqnwMUhsYqq3JEC1k=w1920"
      },
      {
        "id": "1ZZXqejsoyfotIubEnItoGjbcT2s9NiRT",
        "title": "Staking Circle-39.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ZZXqejsoyfotIubEnItoGjbcT2s9NiRT=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ZZXqejsoyfotIubEnItoGjbcT2s9NiRT=w1920"
      },
      {
        "id": "1yemMZRnDXPqu7WSrtGKxMkESbtEqDqIY",
        "title": "Staking Circle-40.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yemMZRnDXPqu7WSrtGKxMkESbtEqDqIY=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yemMZRnDXPqu7WSrtGKxMkESbtEqDqIY=w1920"
      },
      {
        "id": "1tbdyGCP356wCcDGFgbq4kbiFiogPLvnb",
        "title": "Staking Circle-41.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tbdyGCP356wCcDGFgbq4kbiFiogPLvnb=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tbdyGCP356wCcDGFgbq4kbiFiogPLvnb=w1920"
      },
      {
        "id": "1i-EHBT_8mYq1UuLElDnp7zEW57VpRbXS",
        "title": "Staking Circle-42.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1i-EHBT_8mYq1UuLElDnp7zEW57VpRbXS=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1i-EHBT_8mYq1UuLElDnp7zEW57VpRbXS=w1920"
      },
      {
        "id": "1haiQBEe2Y-C5GX1DX7OQ60tQmP1Mh32g",
        "title": "Staking Circle-43.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1haiQBEe2Y-C5GX1DX7OQ60tQmP1Mh32g=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1haiQBEe2Y-C5GX1DX7OQ60tQmP1Mh32g=w1920"
      },
      {
        "id": "1SgtX3JfOp6AVqAg-Koa3BONOJYF--Lp0",
        "title": "Staking Circle-44.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1SgtX3JfOp6AVqAg-Koa3BONOJYF--Lp0=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1SgtX3JfOp6AVqAg-Koa3BONOJYF--Lp0=w1920"
      },
      {
        "id": "1dOs_f-raW3b9qeP6qA6S1v0hwrdRtvWR",
        "title": "Staking Circle-45.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dOs_f-raW3b9qeP6qA6S1v0hwrdRtvWR=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dOs_f-raW3b9qeP6qA6S1v0hwrdRtvWR=w1920"
      },
      {
        "id": "1IllDpGxlM2yNV1NBGr0GquycOD7UJqnw",
        "title": "Staking Circle-46.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1IllDpGxlM2yNV1NBGr0GquycOD7UJqnw=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1IllDpGxlM2yNV1NBGr0GquycOD7UJqnw=w1920"
      },
      {
        "id": "1uqk-9QhS7MTTTeG-EOnlgT3tHwNxOnFO",
        "title": "Staking Circle-47.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1uqk-9QhS7MTTTeG-EOnlgT3tHwNxOnFO=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1uqk-9QhS7MTTTeG-EOnlgT3tHwNxOnFO=w1920"
      },
      {
        "id": "1n3rDjlUlcrKldY916B8OvK_yX9sUzipa",
        "title": "Staking Circle-48.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1n3rDjlUlcrKldY916B8OvK_yX9sUzipa=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1n3rDjlUlcrKldY916B8OvK_yX9sUzipa=w1920"
      },
      {
        "id": "16K8waMY9P4L-X5p9a4ezCtBS-OtzRgPr",
        "title": "Staking Circle-49.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/16K8waMY9P4L-X5p9a4ezCtBS-OtzRgPr=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/16K8waMY9P4L-X5p9a4ezCtBS-OtzRgPr=w1920"
      },
      {
        "id": "15Q2is4v928tNcCKZa4HgQ96J3YOXHJiA",
        "title": "Staking Circle-50.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15Q2is4v928tNcCKZa4HgQ96J3YOXHJiA=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/15Q2is4v928tNcCKZa4HgQ96J3YOXHJiA=w1920"
      }
    ]
  },
  {
    "id": "photo-hod",
    "title": "Heroes of Digital Executive Office & Culture Shoot",
    "client": "Heroes of Digital",
    "year": "2024",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1bKryr69jlC5sfx9-Qxy8cbjO0ywuYmFD?usp=drive_link",
    "coverImage": "https://lh3.googleusercontent.com/d/1aojeGjMRFnl85AHYsheEBxUeTBH3qCox=w1000",
    "tagline": "Contemporary corporate workplace photography, team collaboration portraits, and leadership headshots.",
    "photoCount": 9,
    "photos": [
      {
        "id": "1aojeGjMRFnl85AHYsheEBxUeTBH3qCox",
        "title": "HOD Profile -08.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aojeGjMRFnl85AHYsheEBxUeTBH3qCox=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aojeGjMRFnl85AHYsheEBxUeTBH3qCox=w1920"
      },
      {
        "id": "1t5cgUMAUD6Wk3O914_vedEd4lb2wCecB",
        "title": "HOD Profile -23.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t5cgUMAUD6Wk3O914_vedEd4lb2wCecB=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t5cgUMAUD6Wk3O914_vedEd4lb2wCecB=w1920"
      },
      {
        "id": "1lUTP-b-JmWslkZ8GZV9xPuQvn0XIB11V",
        "title": "HOD-01.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lUTP-b-JmWslkZ8GZV9xPuQvn0XIB11V=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lUTP-b-JmWslkZ8GZV9xPuQvn0XIB11V=w1920"
      },
      {
        "id": "12r11h-Yt5LKsiXCqNJ2mS20F77tw7MzR",
        "title": "HOD-12.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12r11h-Yt5LKsiXCqNJ2mS20F77tw7MzR=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/12r11h-Yt5LKsiXCqNJ2mS20F77tw7MzR=w1920"
      },
      {
        "id": "1ism4h38Emg9HUOijnv7FgziQrMP3x0D2",
        "title": "HOD-24.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ism4h38Emg9HUOijnv7FgziQrMP3x0D2=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ism4h38Emg9HUOijnv7FgziQrMP3x0D2=w1920"
      },
      {
        "id": "12pgRLiO5WjNTCBfns6kJWu410Cy0Zf_5",
        "title": "HODWEB-03.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12pgRLiO5WjNTCBfns6kJWu410Cy0Zf_5=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/12pgRLiO5WjNTCBfns6kJWu410Cy0Zf_5=w1920"
      },
      {
        "id": "1HBldN7HVAJKuD0WYM0bpRqwJVBe0mZXZ",
        "title": "HODWEB-04.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HBldN7HVAJKuD0WYM0bpRqwJVBe0mZXZ=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HBldN7HVAJKuD0WYM0bpRqwJVBe0mZXZ=w1920"
      },
      {
        "id": "1Z6PJnTtYqw_PLR3KxanaX_BL9FCbPakQ",
        "title": "HODWEB-09.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Z6PJnTtYqw_PLR3KxanaX_BL9FCbPakQ=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Z6PJnTtYqw_PLR3KxanaX_BL9FCbPakQ=w1920"
      },
      {
        "id": "1KLOIXareXX3ZcSeaYgq6mk1cRl4aofEW",
        "title": "HODWEB-15.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1KLOIXareXX3ZcSeaYgq6mk1cRl4aofEW=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1KLOIXareXX3ZcSeaYgq6mk1cRl4aofEW=w1920"
      }
    ]
  },
  {
    "id": "photo-stanford",
    "title": "Stanford Club of Singapore Annual Gala Dinner",
    "client": "Stanford Club of Singapore",
    "year": "2023",
    "driveFolderUrl": "https://photos.app.goo.gl/TQ3Rg77mPrJixLQRA",
    "coverImage": "https://lh3.googleusercontent.com/pw/AP1GczND-oDF_ZSNFmk_Aqxb5pW5grOQpkJ1wxV7w4MX-WranieYDN8QccUVkKii37aDnMnURHOQq5SorXtgkXutZzhkTaUGKzia0OM0_N9vzgBjyP2WXXUI=w1200-h315-p-k",
    "tagline": "Dignified alumni reunion photography capturing dinner festivities, fellowship toast, and memorable group portraits.",
    "photoCount": 331,
    "photos": [
      {
        "id": "stanford-0",
        "title": "Stanford Gala 1",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczND-oDF_ZSNFmk_Aqxb5pW5grOQpkJ1wxV7w4MX-WranieYDN8QccUVkKii37aDnMnURHOQq5SorXtgkXutZzhkTaUGKzia0OM0_N9vzgBjyP2WXXUI=w1200-h315-p-k=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczND-oDF_ZSNFmk_Aqxb5pW5grOQpkJ1wxV7w4MX-WranieYDN8QccUVkKii37aDnMnURHOQq5SorXtgkXutZzhkTaUGKzia0OM0_N9vzgBjyP2WXXUI=w1200-h315-p-k=w600"
      },
      {
        "id": "stanford-1",
        "title": "Stanford Gala 2",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPyDIbGoEK9Ew1shxo9x635bjuCekiUy7pC8J7GgxZLd5SbARXeVCqAGcFVtBypqQJsGNlTSQHim787zxmcGHF_-Ifjyi9srr9fatfuUCOZqSQORG7d=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPyDIbGoEK9Ew1shxo9x635bjuCekiUy7pC8J7GgxZLd5SbARXeVCqAGcFVtBypqQJsGNlTSQHim787zxmcGHF_-Ifjyi9srr9fatfuUCOZqSQORG7d=w108-h72-no=w600"
      },
      {
        "id": "stanford-2",
        "title": "Stanford Gala 3",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMVSMBA4yUIZ2ltznDmwEyFEChPpSvqB0C5aZEhLzANW1j3e9dSJxugT5hz2Vt8NuuzDbIMnHJmNuAl1KIuZmAi1j8Y_E8a2NqLU24aEX_sV4JU6hMj=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMVSMBA4yUIZ2ltznDmwEyFEChPpSvqB0C5aZEhLzANW1j3e9dSJxugT5hz2Vt8NuuzDbIMnHJmNuAl1KIuZmAi1j8Y_E8a2NqLU24aEX_sV4JU6hMj=w108-h72-no=w600"
      },
      {
        "id": "stanford-3",
        "title": "Stanford Gala 4",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPKFxut_X2A1aw9Q0r-WWJHQPl12L8KHQAkhInq1JL9wt4wvd3L8xn42XLOF6AWi2strXR5vcDdQSoKTmeuiLlsIhsZjSwACUpQsXINmvk2RWSUWexS=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPKFxut_X2A1aw9Q0r-WWJHQPl12L8KHQAkhInq1JL9wt4wvd3L8xn42XLOF6AWi2strXR5vcDdQSoKTmeuiLlsIhsZjSwACUpQsXINmvk2RWSUWexS=w108-h72-no=w600"
      },
      {
        "id": "stanford-4",
        "title": "Stanford Gala 5",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZmIlLkJfQqivXktKsGLJklE2fwSfIvdUPE-0ywy_1Y2pwfy0gUomeXADER8PpQ2_KwYou_D7_gDPVn5ifYdQ9u4RNtVTUGEFaT4vELNpWmx0tFSnU=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZmIlLkJfQqivXktKsGLJklE2fwSfIvdUPE-0ywy_1Y2pwfy0gUomeXADER8PpQ2_KwYou_D7_gDPVn5ifYdQ9u4RNtVTUGEFaT4vELNpWmx0tFSnU=w108-h72-no=w600"
      },
      {
        "id": "stanford-5",
        "title": "Stanford Gala 6",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNCzloD_Rlzc-fsOglyHGRN3Xdjviq8b2EarGDfVK7t4XF6XDauMPsrOjlS4o2-uoTYGUtqH2dBfk4tHlSlwSVQrYReTcXZZbAHCq3KmvfRl-stXMtS=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNCzloD_Rlzc-fsOglyHGRN3Xdjviq8b2EarGDfVK7t4XF6XDauMPsrOjlS4o2-uoTYGUtqH2dBfk4tHlSlwSVQrYReTcXZZbAHCq3KmvfRl-stXMtS=w108-h72-no=w600"
      },
      {
        "id": "stanford-6",
        "title": "Stanford Gala 7",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPHjwz3aL2Fa_bWqwG2ltKefdbWrJCcrlbfskOTZS3Anam3xEQLWlJ6zJ-dpHoy5j-Xuqh8BDzP6DKqBHMYz4iCsyizTxJgOjPS9rhIHP5UNCxm3duH=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPHjwz3aL2Fa_bWqwG2ltKefdbWrJCcrlbfskOTZS3Anam3xEQLWlJ6zJ-dpHoy5j-Xuqh8BDzP6DKqBHMYz4iCsyizTxJgOjPS9rhIHP5UNCxm3duH=w108-h72-no=w600"
      },
      {
        "id": "stanford-7",
        "title": "Stanford Gala 8",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZFx5MVvFEq86YbJG9rDmljwNCv49cuOp7pqrN_rVqg5oE1E8z56vSqF7L2VeRmfq8ngTEBHlOeuKj5DodZtlPcVxo-St2z3olLEGRWVCHaLDOigpt=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZFx5MVvFEq86YbJG9rDmljwNCv49cuOp7pqrN_rVqg5oE1E8z56vSqF7L2VeRmfq8ngTEBHlOeuKj5DodZtlPcVxo-St2z3olLEGRWVCHaLDOigpt=w108-h72-no=w600"
      },
      {
        "id": "stanford-8",
        "title": "Stanford Gala 9",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMfUM4K90_IBCAsKEx6UGsOtX2Ngnt4uuWaRnXIN0uxjAg2egeZMrXT7qaFJ6bk07y-kzfaFgkZjdVsXGY2svOJfeuiJmvX0GzMmYCWTLJpTlCIgaoD=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMfUM4K90_IBCAsKEx6UGsOtX2Ngnt4uuWaRnXIN0uxjAg2egeZMrXT7qaFJ6bk07y-kzfaFgkZjdVsXGY2svOJfeuiJmvX0GzMmYCWTLJpTlCIgaoD=w108-h72-no=w600"
      },
      {
        "id": "stanford-9",
        "title": "Stanford Gala 10",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb3qoLg5UIUvMqB1jecYQ4VHM9pbl7pvHfuylfT5rsdVTXINB-KFmc5IuYddPEVAZY6Z9V6dwJmD7FFpWpJiYzLCGNNoa1MucsE8PywVj2tnXbcX1t=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb3qoLg5UIUvMqB1jecYQ4VHM9pbl7pvHfuylfT5rsdVTXINB-KFmc5IuYddPEVAZY6Z9V6dwJmD7FFpWpJiYzLCGNNoa1MucsE8PywVj2tnXbcX1t=w108-h72-no=w600"
      },
      {
        "id": "stanford-10",
        "title": "Stanford Gala 11",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0eFXpYCzDANy60Qqm3DoUDDOMO4nSzvSQAUuPTzHy76Svybowaxa9iBYKN5jk6gi79V9EV2we5q1D1PfntfKGLtbQtQB1UT40Q8WC0S05r5ZOl58b=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0eFXpYCzDANy60Qqm3DoUDDOMO4nSzvSQAUuPTzHy76Svybowaxa9iBYKN5jk6gi79V9EV2we5q1D1PfntfKGLtbQtQB1UT40Q8WC0S05r5ZOl58b=w108-h72-no=w600"
      },
      {
        "id": "stanford-11",
        "title": "Stanford Gala 12",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM6XmXoSPUNkpnQWNuLRDPO1NT9yWAR92AhC3z2tflQYfppXU_yN1OTKY9850_fvSdEWyzB-56r3yLPIKiOBFEMH_RjsMMuN0yJHHi_wHM2Yf9mgHjU=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM6XmXoSPUNkpnQWNuLRDPO1NT9yWAR92AhC3z2tflQYfppXU_yN1OTKY9850_fvSdEWyzB-56r3yLPIKiOBFEMH_RjsMMuN0yJHHi_wHM2Yf9mgHjU=w108-h72-no=w600"
      },
      {
        "id": "stanford-12",
        "title": "Stanford Gala 13",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOt7VcvyfE7gLoySQaFnFvQiwfxlGc3mf3U5mQWeFZbypY1wcTThMyg3Qn1rIl7CeZCp4fqtDJ9Wc-IycIPT6fKuSxKrxB4BS-2bRsPWtmCtWGniGz1=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOt7VcvyfE7gLoySQaFnFvQiwfxlGc3mf3U5mQWeFZbypY1wcTThMyg3Qn1rIl7CeZCp4fqtDJ9Wc-IycIPT6fKuSxKrxB4BS-2bRsPWtmCtWGniGz1=w108-h72-no=w600"
      },
      {
        "id": "stanford-13",
        "title": "Stanford Gala 14",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMrloyhyrtNZVjC0R_mjW_Xf68sxPdPF1lZK7Rf8KfKRFmrWjw09Onnc1TZ6pNuOgW0m_XCaH8epwbMUAqJrHGmFYkCLS7h-Lb5V0q-qUjyI_pxSnez=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMrloyhyrtNZVjC0R_mjW_Xf68sxPdPF1lZK7Rf8KfKRFmrWjw09Onnc1TZ6pNuOgW0m_XCaH8epwbMUAqJrHGmFYkCLS7h-Lb5V0q-qUjyI_pxSnez=w108-h72-no=w600"
      },
      {
        "id": "stanford-14",
        "title": "Stanford Gala 15",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMpCIKxkbOICydcnnCtdPd2oKw5WXO60atgwOytKlzHBeYxh_yoDZXC8sBMlgnANKK7vzwR60doLs0Rcx_5FxyXQiJp0tA7yj3tOKGALvExeemSPlDJ=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMpCIKxkbOICydcnnCtdPd2oKw5WXO60atgwOytKlzHBeYxh_yoDZXC8sBMlgnANKK7vzwR60doLs0Rcx_5FxyXQiJp0tA7yj3tOKGALvExeemSPlDJ=w108-h72-no=w600"
      },
      {
        "id": "stanford-15",
        "title": "Stanford Gala 16",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO6aCe3cU2UKeWaavOGFI-vfjCflz6rEhL83Yla-lRsect2LtQfYs7mBgx-kOZ6z8FkhqH7tpIT5GFmSDJ_BG_xoJZOvFRgRwxDcDyFD7McRQ77o7f5=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO6aCe3cU2UKeWaavOGFI-vfjCflz6rEhL83Yla-lRsect2LtQfYs7mBgx-kOZ6z8FkhqH7tpIT5GFmSDJ_BG_xoJZOvFRgRwxDcDyFD7McRQ77o7f5=w108-h72-no=w600"
      },
      {
        "id": "stanford-16",
        "title": "Stanford Gala 17",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMTnal-Mx6ov0SQaEe1mlgYxTigdaXgkokdZjqcQNY-DFzKj5ynYsomSTgq31WFhaafIU_doLr8gXrvKOwZ80rVSQq3aJpnQX6d4JvbRpr6rbvTFIYE=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMTnal-Mx6ov0SQaEe1mlgYxTigdaXgkokdZjqcQNY-DFzKj5ynYsomSTgq31WFhaafIU_doLr8gXrvKOwZ80rVSQq3aJpnQX6d4JvbRpr6rbvTFIYE=w108-h72-no=w600"
      },
      {
        "id": "stanford-17",
        "title": "Stanford Gala 18",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMF0zEPJHm1GfCb7MboZ3n2rhQx9T1q6CnSkc6luOjgNk7HRrF1b2lO1ZkIVsT1-okEPghBq5AQeWeRrJSetsncfTHP6Tma1wbUa9sodEeQE6Y6FyJk=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMF0zEPJHm1GfCb7MboZ3n2rhQx9T1q6CnSkc6luOjgNk7HRrF1b2lO1ZkIVsT1-okEPghBq5AQeWeRrJSetsncfTHP6Tma1wbUa9sodEeQE6Y6FyJk=w108-h72-no=w600"
      },
      {
        "id": "stanford-18",
        "title": "Stanford Gala 19",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPa7c01uTk0sZrlQD8QkKqyc_0SthFw5RxZOldDa95E7KTGoEOOSBh69wTdMk8uP8VPrObWRnFK5vwmDUJ4w67vCpewmixqlzsk1kibZEIUOWVo8OC_=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPa7c01uTk0sZrlQD8QkKqyc_0SthFw5RxZOldDa95E7KTGoEOOSBh69wTdMk8uP8VPrObWRnFK5vwmDUJ4w67vCpewmixqlzsk1kibZEIUOWVo8OC_=w108-h72-no=w600"
      },
      {
        "id": "stanford-19",
        "title": "Stanford Gala 20",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOWn8OWKhLaHRcfMgVgcYWnAeIpN2I0O852iDM3AlQG0ZF0NfmY49GOBkmajkVw5i8B3zuzovNviXDfhfyEtlA4LeSlrdf-wUOPj5UbMde3p4M9_xcG=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOWn8OWKhLaHRcfMgVgcYWnAeIpN2I0O852iDM3AlQG0ZF0NfmY49GOBkmajkVw5i8B3zuzovNviXDfhfyEtlA4LeSlrdf-wUOPj5UbMde3p4M9_xcG=w108-h72-no=w600"
      },
      {
        "id": "stanford-20",
        "title": "Stanford Gala 21",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOpeD5h8JLnMzzWSVOEXIyrkbvSZu2sEKxUb8fAFxmi6eBmd1oUrfV0yRHxGXXQgbUvKInHRYjAz-M3ydMgtOJLlMDipcbnry9Y0YNg_qV9Ziz_hTHC=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOpeD5h8JLnMzzWSVOEXIyrkbvSZu2sEKxUb8fAFxmi6eBmd1oUrfV0yRHxGXXQgbUvKInHRYjAz-M3ydMgtOJLlMDipcbnry9Y0YNg_qV9Ziz_hTHC=w108-h72-no=w600"
      },
      {
        "id": "stanford-21",
        "title": "Stanford Gala 22",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNxKF8LyEc-7n-iSumUimcS3Flmk1OCbyf5kU5Kmow-lq8I0opBsGXh8B_MQkE6EI5etPr73roB0e5p3exPcUS51VU2XYUYEt_uzTdelWjwYmVTtJWw=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNxKF8LyEc-7n-iSumUimcS3Flmk1OCbyf5kU5Kmow-lq8I0opBsGXh8B_MQkE6EI5etPr73roB0e5p3exPcUS51VU2XYUYEt_uzTdelWjwYmVTtJWw=w108-h72-no=w600"
      },
      {
        "id": "stanford-22",
        "title": "Stanford Gala 23",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOylkAGe8JTKx0Wjh4i_LJIJQriNlxMiCkcdp7Wv86y-HfGpzaaQHUulr7FuBb4BBPl5ZcAI8NPriD3BsgoxPhkBdiswCEI2iqIWxQx4qj0oK7cTwPv=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOylkAGe8JTKx0Wjh4i_LJIJQriNlxMiCkcdp7Wv86y-HfGpzaaQHUulr7FuBb4BBPl5ZcAI8NPriD3BsgoxPhkBdiswCEI2iqIWxQx4qj0oK7cTwPv=w108-h72-no=w600"
      },
      {
        "id": "stanford-23",
        "title": "Stanford Gala 24",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb8BAHDa4Brw8tA4uqPXt8EbX2NgdqWTts_DPn8lJkwoqKVKpU9kfcQgFfj5qc0qsSWHBO0RUEDXrA2IVTF7dFU-ExCeFh36F7NMIRSon7G5l1i6g0=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb8BAHDa4Brw8tA4uqPXt8EbX2NgdqWTts_DPn8lJkwoqKVKpU9kfcQgFfj5qc0qsSWHBO0RUEDXrA2IVTF7dFU-ExCeFh36F7NMIRSon7G5l1i6g0=w108-h72-no=w600"
      },
      {
        "id": "stanford-24",
        "title": "Stanford Gala 25",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP3UEZ3U_Mtwvv5mdHrGtpDtfW-wtRvrZQ1oQrNLKMqowInjiuDqC25YFy6q1lCALjM5cOuSC_iMtxcTEwrnkUBYzqnooAxYudV9VIhJrOk0jGvrtvK=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP3UEZ3U_Mtwvv5mdHrGtpDtfW-wtRvrZQ1oQrNLKMqowInjiuDqC25YFy6q1lCALjM5cOuSC_iMtxcTEwrnkUBYzqnooAxYudV9VIhJrOk0jGvrtvK=w108-h72-no=w600"
      },
      {
        "id": "stanford-25",
        "title": "Stanford Gala 26",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM1ftgb_QqLymc6lHsodB0YfqRSNajbxNc_325wLKyiGVWxyZ2pKU0Mbnps5iIcg3h8aXCSlTWj0twR237aati-EbPFEjzRqclcCzkameRLMwRoF1sj=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM1ftgb_QqLymc6lHsodB0YfqRSNajbxNc_325wLKyiGVWxyZ2pKU0Mbnps5iIcg3h8aXCSlTWj0twR237aati-EbPFEjzRqclcCzkameRLMwRoF1sj=w108-h72-no=w600"
      },
      {
        "id": "stanford-26",
        "title": "Stanford Gala 27",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO4EZBwc9ipCrwIpOXkIyp3zNypy48TrH-mOUZD1aqJjFR9-kPcqWP5FDjajcI5EYn0BSq5eMxjzNb3YwNpQFNgFkqmJGXkUQZi5L-8eBv9LPAyhnVQ=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO4EZBwc9ipCrwIpOXkIyp3zNypy48TrH-mOUZD1aqJjFR9-kPcqWP5FDjajcI5EYn0BSq5eMxjzNb3YwNpQFNgFkqmJGXkUQZi5L-8eBv9LPAyhnVQ=w108-h72-no=w600"
      },
      {
        "id": "stanford-27",
        "title": "Stanford Gala 28",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOeN8mHq2cnT3bBuAfh3omyW9Rb1_G-IUsmLxYXXnjR7ZGwg9ryXHnFSIcXD3NPyKvP2ARrMK4WuWPqOLYTrvD1_kjR8HvxfiFccBGM1BtU5Lpim3Qo=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOeN8mHq2cnT3bBuAfh3omyW9Rb1_G-IUsmLxYXXnjR7ZGwg9ryXHnFSIcXD3NPyKvP2ARrMK4WuWPqOLYTrvD1_kjR8HvxfiFccBGM1BtU5Lpim3Qo=w108-h72-no=w600"
      },
      {
        "id": "stanford-28",
        "title": "Stanford Gala 29",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPhts_sUvagu5FVffgJXlm0twbYapn4x8NJzFcmMu5FjqQja30amBAS36J-PLMsHeD8jNlh0gBoYoGw7-gOyactMAD5k5-7gQLYOSIYZ-EH46Bm9t1h=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPhts_sUvagu5FVffgJXlm0twbYapn4x8NJzFcmMu5FjqQja30amBAS36J-PLMsHeD8jNlh0gBoYoGw7-gOyactMAD5k5-7gQLYOSIYZ-EH46Bm9t1h=w108-h72-no=w600"
      },
      {
        "id": "stanford-29",
        "title": "Stanford Gala 30",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOIXx9DDzmIDDCG8683cXXW989VMgS59o_tjJIYNjfgE5smJD-cUslhbzfzV82mHMQfQ2T6yOR97AXv4tMujwbWOfh0oldxr9lorqgIrx8ehoUD6_J4=w108-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOIXx9DDzmIDDCG8683cXXW989VMgS59o_tjJIYNjfgE5smJD-cUslhbzfzV82mHMQfQ2T6yOR97AXv4tMujwbWOfh0oldxr9lorqgIrx8ehoUD6_J4=w108-h72-no=w600"
      },
      {
        "id": "stanford-30",
        "title": "Stanford Gala 31",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOcR3bXc255zz6Ym0koUrZNb32n7SCPWu4H5IOeVxjArVySWbjE6SdIbLg_jDG2ttFAyPXaXaPchIF1CCxrl7BDFVqe2qSizRoUEq2a2nWcE0F_Kugr=w48-h72-no=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOcR3bXc255zz6Ym0koUrZNb32n7SCPWu4H5IOeVxjArVySWbjE6SdIbLg_jDG2ttFAyPXaXaPchIF1CCxrl7BDFVqe2qSizRoUEq2a2nWcE0F_Kugr=w48-h72-no=w600"
      },
      {
        "id": "stanford-31",
        "title": "Stanford Gala 32",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPyDIbGoEK9Ew1shxo9x635bjuCekiUy7pC8J7GgxZLd5SbARXeVCqAGcFVtBypqQJsGNlTSQHim787zxmcGHF_-Ifjyi9srr9fatfuUCOZqSQORG7d=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPyDIbGoEK9Ew1shxo9x635bjuCekiUy7pC8J7GgxZLd5SbARXeVCqAGcFVtBypqQJsGNlTSQHim787zxmcGHF_-Ifjyi9srr9fatfuUCOZqSQORG7d=w600"
      },
      {
        "id": "stanford-32",
        "title": "Stanford Gala 33",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMVSMBA4yUIZ2ltznDmwEyFEChPpSvqB0C5aZEhLzANW1j3e9dSJxugT5hz2Vt8NuuzDbIMnHJmNuAl1KIuZmAi1j8Y_E8a2NqLU24aEX_sV4JU6hMj=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMVSMBA4yUIZ2ltznDmwEyFEChPpSvqB0C5aZEhLzANW1j3e9dSJxugT5hz2Vt8NuuzDbIMnHJmNuAl1KIuZmAi1j8Y_E8a2NqLU24aEX_sV4JU6hMj=w600"
      },
      {
        "id": "stanford-33",
        "title": "Stanford Gala 34",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPKFxut_X2A1aw9Q0r-WWJHQPl12L8KHQAkhInq1JL9wt4wvd3L8xn42XLOF6AWi2strXR5vcDdQSoKTmeuiLlsIhsZjSwACUpQsXINmvk2RWSUWexS=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPKFxut_X2A1aw9Q0r-WWJHQPl12L8KHQAkhInq1JL9wt4wvd3L8xn42XLOF6AWi2strXR5vcDdQSoKTmeuiLlsIhsZjSwACUpQsXINmvk2RWSUWexS=w600"
      },
      {
        "id": "stanford-34",
        "title": "Stanford Gala 35",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZmIlLkJfQqivXktKsGLJklE2fwSfIvdUPE-0ywy_1Y2pwfy0gUomeXADER8PpQ2_KwYou_D7_gDPVn5ifYdQ9u4RNtVTUGEFaT4vELNpWmx0tFSnU=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZmIlLkJfQqivXktKsGLJklE2fwSfIvdUPE-0ywy_1Y2pwfy0gUomeXADER8PpQ2_KwYou_D7_gDPVn5ifYdQ9u4RNtVTUGEFaT4vELNpWmx0tFSnU=w600"
      },
      {
        "id": "stanford-35",
        "title": "Stanford Gala 36",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNCzloD_Rlzc-fsOglyHGRN3Xdjviq8b2EarGDfVK7t4XF6XDauMPsrOjlS4o2-uoTYGUtqH2dBfk4tHlSlwSVQrYReTcXZZbAHCq3KmvfRl-stXMtS=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNCzloD_Rlzc-fsOglyHGRN3Xdjviq8b2EarGDfVK7t4XF6XDauMPsrOjlS4o2-uoTYGUtqH2dBfk4tHlSlwSVQrYReTcXZZbAHCq3KmvfRl-stXMtS=w600"
      },
      {
        "id": "stanford-36",
        "title": "Stanford Gala 37",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPHjwz3aL2Fa_bWqwG2ltKefdbWrJCcrlbfskOTZS3Anam3xEQLWlJ6zJ-dpHoy5j-Xuqh8BDzP6DKqBHMYz4iCsyizTxJgOjPS9rhIHP5UNCxm3duH=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPHjwz3aL2Fa_bWqwG2ltKefdbWrJCcrlbfskOTZS3Anam3xEQLWlJ6zJ-dpHoy5j-Xuqh8BDzP6DKqBHMYz4iCsyizTxJgOjPS9rhIHP5UNCxm3duH=w600"
      },
      {
        "id": "stanford-37",
        "title": "Stanford Gala 38",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZFx5MVvFEq86YbJG9rDmljwNCv49cuOp7pqrN_rVqg5oE1E8z56vSqF7L2VeRmfq8ngTEBHlOeuKj5DodZtlPcVxo-St2z3olLEGRWVCHaLDOigpt=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZFx5MVvFEq86YbJG9rDmljwNCv49cuOp7pqrN_rVqg5oE1E8z56vSqF7L2VeRmfq8ngTEBHlOeuKj5DodZtlPcVxo-St2z3olLEGRWVCHaLDOigpt=w600"
      },
      {
        "id": "stanford-38",
        "title": "Stanford Gala 39",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMfUM4K90_IBCAsKEx6UGsOtX2Ngnt4uuWaRnXIN0uxjAg2egeZMrXT7qaFJ6bk07y-kzfaFgkZjdVsXGY2svOJfeuiJmvX0GzMmYCWTLJpTlCIgaoD=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMfUM4K90_IBCAsKEx6UGsOtX2Ngnt4uuWaRnXIN0uxjAg2egeZMrXT7qaFJ6bk07y-kzfaFgkZjdVsXGY2svOJfeuiJmvX0GzMmYCWTLJpTlCIgaoD=w600"
      },
      {
        "id": "stanford-39",
        "title": "Stanford Gala 40",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb3qoLg5UIUvMqB1jecYQ4VHM9pbl7pvHfuylfT5rsdVTXINB-KFmc5IuYddPEVAZY6Z9V6dwJmD7FFpWpJiYzLCGNNoa1MucsE8PywVj2tnXbcX1t=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb3qoLg5UIUvMqB1jecYQ4VHM9pbl7pvHfuylfT5rsdVTXINB-KFmc5IuYddPEVAZY6Z9V6dwJmD7FFpWpJiYzLCGNNoa1MucsE8PywVj2tnXbcX1t=w600"
      },
      {
        "id": "stanford-40",
        "title": "Stanford Gala 41",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0eFXpYCzDANy60Qqm3DoUDDOMO4nSzvSQAUuPTzHy76Svybowaxa9iBYKN5jk6gi79V9EV2we5q1D1PfntfKGLtbQtQB1UT40Q8WC0S05r5ZOl58b=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0eFXpYCzDANy60Qqm3DoUDDOMO4nSzvSQAUuPTzHy76Svybowaxa9iBYKN5jk6gi79V9EV2we5q1D1PfntfKGLtbQtQB1UT40Q8WC0S05r5ZOl58b=w600"
      },
      {
        "id": "stanford-41",
        "title": "Stanford Gala 42",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM6XmXoSPUNkpnQWNuLRDPO1NT9yWAR92AhC3z2tflQYfppXU_yN1OTKY9850_fvSdEWyzB-56r3yLPIKiOBFEMH_RjsMMuN0yJHHi_wHM2Yf9mgHjU=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM6XmXoSPUNkpnQWNuLRDPO1NT9yWAR92AhC3z2tflQYfppXU_yN1OTKY9850_fvSdEWyzB-56r3yLPIKiOBFEMH_RjsMMuN0yJHHi_wHM2Yf9mgHjU=w600"
      },
      {
        "id": "stanford-42",
        "title": "Stanford Gala 43",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOt7VcvyfE7gLoySQaFnFvQiwfxlGc3mf3U5mQWeFZbypY1wcTThMyg3Qn1rIl7CeZCp4fqtDJ9Wc-IycIPT6fKuSxKrxB4BS-2bRsPWtmCtWGniGz1=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOt7VcvyfE7gLoySQaFnFvQiwfxlGc3mf3U5mQWeFZbypY1wcTThMyg3Qn1rIl7CeZCp4fqtDJ9Wc-IycIPT6fKuSxKrxB4BS-2bRsPWtmCtWGniGz1=w600"
      },
      {
        "id": "stanford-43",
        "title": "Stanford Gala 44",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMrloyhyrtNZVjC0R_mjW_Xf68sxPdPF1lZK7Rf8KfKRFmrWjw09Onnc1TZ6pNuOgW0m_XCaH8epwbMUAqJrHGmFYkCLS7h-Lb5V0q-qUjyI_pxSnez=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMrloyhyrtNZVjC0R_mjW_Xf68sxPdPF1lZK7Rf8KfKRFmrWjw09Onnc1TZ6pNuOgW0m_XCaH8epwbMUAqJrHGmFYkCLS7h-Lb5V0q-qUjyI_pxSnez=w600"
      },
      {
        "id": "stanford-44",
        "title": "Stanford Gala 45",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMpCIKxkbOICydcnnCtdPd2oKw5WXO60atgwOytKlzHBeYxh_yoDZXC8sBMlgnANKK7vzwR60doLs0Rcx_5FxyXQiJp0tA7yj3tOKGALvExeemSPlDJ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMpCIKxkbOICydcnnCtdPd2oKw5WXO60atgwOytKlzHBeYxh_yoDZXC8sBMlgnANKK7vzwR60doLs0Rcx_5FxyXQiJp0tA7yj3tOKGALvExeemSPlDJ=w600"
      },
      {
        "id": "stanford-45",
        "title": "Stanford Gala 46",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO6aCe3cU2UKeWaavOGFI-vfjCflz6rEhL83Yla-lRsect2LtQfYs7mBgx-kOZ6z8FkhqH7tpIT5GFmSDJ_BG_xoJZOvFRgRwxDcDyFD7McRQ77o7f5=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO6aCe3cU2UKeWaavOGFI-vfjCflz6rEhL83Yla-lRsect2LtQfYs7mBgx-kOZ6z8FkhqH7tpIT5GFmSDJ_BG_xoJZOvFRgRwxDcDyFD7McRQ77o7f5=w600"
      },
      {
        "id": "stanford-46",
        "title": "Stanford Gala 47",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMTnal-Mx6ov0SQaEe1mlgYxTigdaXgkokdZjqcQNY-DFzKj5ynYsomSTgq31WFhaafIU_doLr8gXrvKOwZ80rVSQq3aJpnQX6d4JvbRpr6rbvTFIYE=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMTnal-Mx6ov0SQaEe1mlgYxTigdaXgkokdZjqcQNY-DFzKj5ynYsomSTgq31WFhaafIU_doLr8gXrvKOwZ80rVSQq3aJpnQX6d4JvbRpr6rbvTFIYE=w600"
      },
      {
        "id": "stanford-47",
        "title": "Stanford Gala 48",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMF0zEPJHm1GfCb7MboZ3n2rhQx9T1q6CnSkc6luOjgNk7HRrF1b2lO1ZkIVsT1-okEPghBq5AQeWeRrJSetsncfTHP6Tma1wbUa9sodEeQE6Y6FyJk=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMF0zEPJHm1GfCb7MboZ3n2rhQx9T1q6CnSkc6luOjgNk7HRrF1b2lO1ZkIVsT1-okEPghBq5AQeWeRrJSetsncfTHP6Tma1wbUa9sodEeQE6Y6FyJk=w600"
      },
      {
        "id": "stanford-48",
        "title": "Stanford Gala 49",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPa7c01uTk0sZrlQD8QkKqyc_0SthFw5RxZOldDa95E7KTGoEOOSBh69wTdMk8uP8VPrObWRnFK5vwmDUJ4w67vCpewmixqlzsk1kibZEIUOWVo8OC_=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPa7c01uTk0sZrlQD8QkKqyc_0SthFw5RxZOldDa95E7KTGoEOOSBh69wTdMk8uP8VPrObWRnFK5vwmDUJ4w67vCpewmixqlzsk1kibZEIUOWVo8OC_=w600"
      },
      {
        "id": "stanford-49",
        "title": "Stanford Gala 50",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOWn8OWKhLaHRcfMgVgcYWnAeIpN2I0O852iDM3AlQG0ZF0NfmY49GOBkmajkVw5i8B3zuzovNviXDfhfyEtlA4LeSlrdf-wUOPj5UbMde3p4M9_xcG=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOWn8OWKhLaHRcfMgVgcYWnAeIpN2I0O852iDM3AlQG0ZF0NfmY49GOBkmajkVw5i8B3zuzovNviXDfhfyEtlA4LeSlrdf-wUOPj5UbMde3p4M9_xcG=w600"
      },
      {
        "id": "stanford-50",
        "title": "Stanford Gala 51",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOpeD5h8JLnMzzWSVOEXIyrkbvSZu2sEKxUb8fAFxmi6eBmd1oUrfV0yRHxGXXQgbUvKInHRYjAz-M3ydMgtOJLlMDipcbnry9Y0YNg_qV9Ziz_hTHC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOpeD5h8JLnMzzWSVOEXIyrkbvSZu2sEKxUb8fAFxmi6eBmd1oUrfV0yRHxGXXQgbUvKInHRYjAz-M3ydMgtOJLlMDipcbnry9Y0YNg_qV9Ziz_hTHC=w600"
      },
      {
        "id": "stanford-51",
        "title": "Stanford Gala 52",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNxKF8LyEc-7n-iSumUimcS3Flmk1OCbyf5kU5Kmow-lq8I0opBsGXh8B_MQkE6EI5etPr73roB0e5p3exPcUS51VU2XYUYEt_uzTdelWjwYmVTtJWw=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNxKF8LyEc-7n-iSumUimcS3Flmk1OCbyf5kU5Kmow-lq8I0opBsGXh8B_MQkE6EI5etPr73roB0e5p3exPcUS51VU2XYUYEt_uzTdelWjwYmVTtJWw=w600"
      },
      {
        "id": "stanford-52",
        "title": "Stanford Gala 53",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOylkAGe8JTKx0Wjh4i_LJIJQriNlxMiCkcdp7Wv86y-HfGpzaaQHUulr7FuBb4BBPl5ZcAI8NPriD3BsgoxPhkBdiswCEI2iqIWxQx4qj0oK7cTwPv=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOylkAGe8JTKx0Wjh4i_LJIJQriNlxMiCkcdp7Wv86y-HfGpzaaQHUulr7FuBb4BBPl5ZcAI8NPriD3BsgoxPhkBdiswCEI2iqIWxQx4qj0oK7cTwPv=w600"
      },
      {
        "id": "stanford-53",
        "title": "Stanford Gala 54",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb8BAHDa4Brw8tA4uqPXt8EbX2NgdqWTts_DPn8lJkwoqKVKpU9kfcQgFfj5qc0qsSWHBO0RUEDXrA2IVTF7dFU-ExCeFh36F7NMIRSon7G5l1i6g0=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb8BAHDa4Brw8tA4uqPXt8EbX2NgdqWTts_DPn8lJkwoqKVKpU9kfcQgFfj5qc0qsSWHBO0RUEDXrA2IVTF7dFU-ExCeFh36F7NMIRSon7G5l1i6g0=w600"
      },
      {
        "id": "stanford-54",
        "title": "Stanford Gala 55",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP3UEZ3U_Mtwvv5mdHrGtpDtfW-wtRvrZQ1oQrNLKMqowInjiuDqC25YFy6q1lCALjM5cOuSC_iMtxcTEwrnkUBYzqnooAxYudV9VIhJrOk0jGvrtvK=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP3UEZ3U_Mtwvv5mdHrGtpDtfW-wtRvrZQ1oQrNLKMqowInjiuDqC25YFy6q1lCALjM5cOuSC_iMtxcTEwrnkUBYzqnooAxYudV9VIhJrOk0jGvrtvK=w600"
      },
      {
        "id": "stanford-55",
        "title": "Stanford Gala 56",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM1ftgb_QqLymc6lHsodB0YfqRSNajbxNc_325wLKyiGVWxyZ2pKU0Mbnps5iIcg3h8aXCSlTWj0twR237aati-EbPFEjzRqclcCzkameRLMwRoF1sj=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM1ftgb_QqLymc6lHsodB0YfqRSNajbxNc_325wLKyiGVWxyZ2pKU0Mbnps5iIcg3h8aXCSlTWj0twR237aati-EbPFEjzRqclcCzkameRLMwRoF1sj=w600"
      },
      {
        "id": "stanford-56",
        "title": "Stanford Gala 57",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO4EZBwc9ipCrwIpOXkIyp3zNypy48TrH-mOUZD1aqJjFR9-kPcqWP5FDjajcI5EYn0BSq5eMxjzNb3YwNpQFNgFkqmJGXkUQZi5L-8eBv9LPAyhnVQ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO4EZBwc9ipCrwIpOXkIyp3zNypy48TrH-mOUZD1aqJjFR9-kPcqWP5FDjajcI5EYn0BSq5eMxjzNb3YwNpQFNgFkqmJGXkUQZi5L-8eBv9LPAyhnVQ=w600"
      },
      {
        "id": "stanford-57",
        "title": "Stanford Gala 58",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOeN8mHq2cnT3bBuAfh3omyW9Rb1_G-IUsmLxYXXnjR7ZGwg9ryXHnFSIcXD3NPyKvP2ARrMK4WuWPqOLYTrvD1_kjR8HvxfiFccBGM1BtU5Lpim3Qo=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOeN8mHq2cnT3bBuAfh3omyW9Rb1_G-IUsmLxYXXnjR7ZGwg9ryXHnFSIcXD3NPyKvP2ARrMK4WuWPqOLYTrvD1_kjR8HvxfiFccBGM1BtU5Lpim3Qo=w600"
      },
      {
        "id": "stanford-58",
        "title": "Stanford Gala 59",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPhts_sUvagu5FVffgJXlm0twbYapn4x8NJzFcmMu5FjqQja30amBAS36J-PLMsHeD8jNlh0gBoYoGw7-gOyactMAD5k5-7gQLYOSIYZ-EH46Bm9t1h=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPhts_sUvagu5FVffgJXlm0twbYapn4x8NJzFcmMu5FjqQja30amBAS36J-PLMsHeD8jNlh0gBoYoGw7-gOyactMAD5k5-7gQLYOSIYZ-EH46Bm9t1h=w600"
      },
      {
        "id": "stanford-59",
        "title": "Stanford Gala 60",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOIXx9DDzmIDDCG8683cXXW989VMgS59o_tjJIYNjfgE5smJD-cUslhbzfzV82mHMQfQ2T6yOR97AXv4tMujwbWOfh0oldxr9lorqgIrx8ehoUD6_J4=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOIXx9DDzmIDDCG8683cXXW989VMgS59o_tjJIYNjfgE5smJD-cUslhbzfzV82mHMQfQ2T6yOR97AXv4tMujwbWOfh0oldxr9lorqgIrx8ehoUD6_J4=w600"
      },
      {
        "id": "stanford-60",
        "title": "Stanford Gala 61",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOcR3bXc255zz6Ym0koUrZNb32n7SCPWu4H5IOeVxjArVySWbjE6SdIbLg_jDG2ttFAyPXaXaPchIF1CCxrl7BDFVqe2qSizRoUEq2a2nWcE0F_Kugr=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOcR3bXc255zz6Ym0koUrZNb32n7SCPWu4H5IOeVxjArVySWbjE6SdIbLg_jDG2ttFAyPXaXaPchIF1CCxrl7BDFVqe2qSizRoUEq2a2nWcE0F_Kugr=w600"
      },
      {
        "id": "stanford-61",
        "title": "Stanford Gala 62",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPVioOcNJjKdsLPmR0Xn4Xai9d_qxDxDgIqFSAJail5bUrfnlVqm1BJ-bEVwh11lp3Hu6jny4kWxzfroFxiaFaRU1WGOzu-LsCDJyV5D3vvjRh0kRGa=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPVioOcNJjKdsLPmR0Xn4Xai9d_qxDxDgIqFSAJail5bUrfnlVqm1BJ-bEVwh11lp3Hu6jny4kWxzfroFxiaFaRU1WGOzu-LsCDJyV5D3vvjRh0kRGa=w600"
      },
      {
        "id": "stanford-62",
        "title": "Stanford Gala 63",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOboloObKE3Rre2YPZBLX93pXRbj4V0XgkgGyhBMyrolMsm02H4tIajyRDqawWcWAS4lgUVWALCYqD7N4jmv-vre91kEqhjDi9-h4n17Avfc-Q3Y8T2=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOboloObKE3Rre2YPZBLX93pXRbj4V0XgkgGyhBMyrolMsm02H4tIajyRDqawWcWAS4lgUVWALCYqD7N4jmv-vre91kEqhjDi9-h4n17Avfc-Q3Y8T2=w600"
      },
      {
        "id": "stanford-63",
        "title": "Stanford Gala 64",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOEAT6naeQizTcYbjFTVU7nOMlfxm8RpL604-7HL1YwefPW6JRib7FLrlktVkwOmqMJx9kf3DPzrxiigkwrSwz6twOPvjXSfVqHrWNPb1d0Ejyw-nRv=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOEAT6naeQizTcYbjFTVU7nOMlfxm8RpL604-7HL1YwefPW6JRib7FLrlktVkwOmqMJx9kf3DPzrxiigkwrSwz6twOPvjXSfVqHrWNPb1d0Ejyw-nRv=w600"
      },
      {
        "id": "stanford-64",
        "title": "Stanford Gala 65",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNUVmeCUgTjijAYkFFuevomAnI53JDhX3mdhVWs_LO5zp_ah6B-lLZz5R5cp1aKrG_05oZeNxC50dJWOd3VLMG7u2LSVCfVQS4Ikhzs1FcYnkwLpcPm=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNUVmeCUgTjijAYkFFuevomAnI53JDhX3mdhVWs_LO5zp_ah6B-lLZz5R5cp1aKrG_05oZeNxC50dJWOd3VLMG7u2LSVCfVQS4Ikhzs1FcYnkwLpcPm=w600"
      },
      {
        "id": "stanford-65",
        "title": "Stanford Gala 66",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNHVOA9twSm6IPGyvstzZONQlPn8hZbVTpT-_Rla9d91b6vS3ERjKcV9eSObFB-FKcFoufBcPVJAsI-r16SDqphLCugel4Z9YDyqmgYiQ3sCMQY19c4=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNHVOA9twSm6IPGyvstzZONQlPn8hZbVTpT-_Rla9d91b6vS3ERjKcV9eSObFB-FKcFoufBcPVJAsI-r16SDqphLCugel4Z9YDyqmgYiQ3sCMQY19c4=w600"
      },
      {
        "id": "stanford-66",
        "title": "Stanford Gala 67",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOG05rbpI1HUXZLWTGLmcrw0JenN_Rs2-cgo0CFpZzICzS6w6ZdNY5_oIYHdbrgWyWqL5lfU8LF2kXHVbba86yj7-0trgpZqWW4_p9vBI6Cza8Am3xR=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOG05rbpI1HUXZLWTGLmcrw0JenN_Rs2-cgo0CFpZzICzS6w6ZdNY5_oIYHdbrgWyWqL5lfU8LF2kXHVbba86yj7-0trgpZqWW4_p9vBI6Cza8Am3xR=w600"
      },
      {
        "id": "stanford-67",
        "title": "Stanford Gala 68",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMHTjGkkCkTpF9nzNb1zpqRnxrtSje0pfCUyJsq3WUamPvGl03376QN7Ax5Ku3PANVQT2j4qxyt_6IB-WzqOr16GUrEXWlAsD5Uyw5s67RpHreEZO1z=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMHTjGkkCkTpF9nzNb1zpqRnxrtSje0pfCUyJsq3WUamPvGl03376QN7Ax5Ku3PANVQT2j4qxyt_6IB-WzqOr16GUrEXWlAsD5Uyw5s67RpHreEZO1z=w600"
      },
      {
        "id": "stanford-68",
        "title": "Stanford Gala 69",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNEr7qoCkE17V7B9Bu6k8zoA78Wg8mTqGPdGS7oMv2UXZanw3vfnCiR5gCjb6VY-rdz2eFVsYtnDc_B-O51sH7uhrjaUm-W0Oa707vmIE197L8rpfTe=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNEr7qoCkE17V7B9Bu6k8zoA78Wg8mTqGPdGS7oMv2UXZanw3vfnCiR5gCjb6VY-rdz2eFVsYtnDc_B-O51sH7uhrjaUm-W0Oa707vmIE197L8rpfTe=w600"
      },
      {
        "id": "stanford-69",
        "title": "Stanford Gala 70",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNQccVNICnrppGQVx32xtsjU1jmyNUQ5LlZ-P94IjCj5H1yh8cvjvj-cg2JCWmm1I7EyAPPeRVwpTL4JBCnkknVR4fAT9SuH975wGeoN-4JmIeND0TC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNQccVNICnrppGQVx32xtsjU1jmyNUQ5LlZ-P94IjCj5H1yh8cvjvj-cg2JCWmm1I7EyAPPeRVwpTL4JBCnkknVR4fAT9SuH975wGeoN-4JmIeND0TC=w600"
      },
      {
        "id": "stanford-70",
        "title": "Stanford Gala 71",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO72DA_lny5yrBC8lmbAX2RjhIhFgfOL6YPG8WJJTsxMvSHg734Lh1cDb4xRxWPujquZu5EXxwuwZYg4hdNyyBgrMX-B_bJ90SOmE3cy4amCJJm3LBM=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO72DA_lny5yrBC8lmbAX2RjhIhFgfOL6YPG8WJJTsxMvSHg734Lh1cDb4xRxWPujquZu5EXxwuwZYg4hdNyyBgrMX-B_bJ90SOmE3cy4amCJJm3LBM=w600"
      },
      {
        "id": "stanford-71",
        "title": "Stanford Gala 72",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOvus2sewTM52FC6Lzg74OSmeGZ5nlgcSZuurei-X2enO5rKlFVj9cHpJBB4YXhtYdKLlE-bTzd7tZLinVMvwFJ2k5FmK56Tj63PLo8Yz8mat1kpKoW=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOvus2sewTM52FC6Lzg74OSmeGZ5nlgcSZuurei-X2enO5rKlFVj9cHpJBB4YXhtYdKLlE-bTzd7tZLinVMvwFJ2k5FmK56Tj63PLo8Yz8mat1kpKoW=w600"
      },
      {
        "id": "stanford-72",
        "title": "Stanford Gala 73",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPIE9yizFArhD4VPWDDU84jakpbYHiTE02AJUyT-Swml1--9DwdkH-j1MGs9IG10UuJCzWHxfovNGZsgkuVxMlOJfd1ELSnSZblEWZbdwlhu4Ehq_Hj=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPIE9yizFArhD4VPWDDU84jakpbYHiTE02AJUyT-Swml1--9DwdkH-j1MGs9IG10UuJCzWHxfovNGZsgkuVxMlOJfd1ELSnSZblEWZbdwlhu4Ehq_Hj=w600"
      },
      {
        "id": "stanford-73",
        "title": "Stanford Gala 74",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNp49MZIuf4DwNFNfw85fywLdATj5MrpTpTg7W7M3uLGu06zRPDxh0KuHN-8oYX4XifWSSiXRlh6EAwEJs4XKw6FOroIVEAC9qnwj7N-oTTBUiETs_b=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNp49MZIuf4DwNFNfw85fywLdATj5MrpTpTg7W7M3uLGu06zRPDxh0KuHN-8oYX4XifWSSiXRlh6EAwEJs4XKw6FOroIVEAC9qnwj7N-oTTBUiETs_b=w600"
      },
      {
        "id": "stanford-74",
        "title": "Stanford Gala 75",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPv-BXRd5RjFg82Z5hcmWhX05ElWci2Hh-C8flYcscgNeTTqoEKhiAtJG2gozWQTnr-BZ5KGzygdT_-UnaByJsIzkUgModCYZZdFfc1bE7VILMwmt0d=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPv-BXRd5RjFg82Z5hcmWhX05ElWci2Hh-C8flYcscgNeTTqoEKhiAtJG2gozWQTnr-BZ5KGzygdT_-UnaByJsIzkUgModCYZZdFfc1bE7VILMwmt0d=w600"
      },
      {
        "id": "stanford-75",
        "title": "Stanford Gala 76",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMwcd1q5bkpUQZq1GpfhoUKoagd-bKF80aPsci51piMrSaRvnn4A2M2Qu7bLNGnXyQRVvrkLes-VLCgz7Xbt3pVCs1drOU6KrUgK0nhobFU1QC0RM8A=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMwcd1q5bkpUQZq1GpfhoUKoagd-bKF80aPsci51piMrSaRvnn4A2M2Qu7bLNGnXyQRVvrkLes-VLCgz7Xbt3pVCs1drOU6KrUgK0nhobFU1QC0RM8A=w600"
      },
      {
        "id": "stanford-76",
        "title": "Stanford Gala 77",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOeSaJYFF1Dee_YhZs2VQI9_bAibFf032pdksaCk9S22QdsG-vT8ja-gyN3kfln-iSHde2u5iQBJ3GiqFj-MGTyNXQI_nyPSNC7EQEcwec64KZt6Ghe=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOeSaJYFF1Dee_YhZs2VQI9_bAibFf032pdksaCk9S22QdsG-vT8ja-gyN3kfln-iSHde2u5iQBJ3GiqFj-MGTyNXQI_nyPSNC7EQEcwec64KZt6Ghe=w600"
      },
      {
        "id": "stanford-77",
        "title": "Stanford Gala 78",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMllS5Kts2q_v4iVOamQYtAWkDZ2zli6ba4xfCLk5PFYgiQbO6vvKQSk93v5YkTPPQvX7sof30j6LQRBg2YjwedS0ycWIUQOPwiYS7ZOev_rPyut57H=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMllS5Kts2q_v4iVOamQYtAWkDZ2zli6ba4xfCLk5PFYgiQbO6vvKQSk93v5YkTPPQvX7sof30j6LQRBg2YjwedS0ycWIUQOPwiYS7ZOev_rPyut57H=w600"
      },
      {
        "id": "stanford-78",
        "title": "Stanford Gala 79",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZNBzC8dPfS9jGRv46TxPPT3BgTclVoegpwmbvW23kcVkaOOvwtlYXHItMJNXhcnFL_uaWk93RFU06BsMkY1mKBCKMxzyP5HSOsVwsNmginJM2w8e_=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZNBzC8dPfS9jGRv46TxPPT3BgTclVoegpwmbvW23kcVkaOOvwtlYXHItMJNXhcnFL_uaWk93RFU06BsMkY1mKBCKMxzyP5HSOsVwsNmginJM2w8e_=w600"
      },
      {
        "id": "stanford-79",
        "title": "Stanford Gala 80",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNVUdN956h3OvPhOcyaw2XzC3b_RwJ0hTHcVICB1CSS0fK10U-ja60gb7s9KAX8mZ0FrajzAPrL4n0YfvKfOg_mE5T8biDjtxwVsz8Urg6YeRuUIA_g=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNVUdN956h3OvPhOcyaw2XzC3b_RwJ0hTHcVICB1CSS0fK10U-ja60gb7s9KAX8mZ0FrajzAPrL4n0YfvKfOg_mE5T8biDjtxwVsz8Urg6YeRuUIA_g=w600"
      },
      {
        "id": "stanford-80",
        "title": "Stanford Gala 81",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMXhg8AUXNC_IlxyQSDCXCKL5bD6K9fJlHqHiqTacejtiImz1wbgkik4wY3w2_toXb1wuEpbKGssTom3AvHROeZID3nstGAnf24CWMPPBO7ae_x0Ylz=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMXhg8AUXNC_IlxyQSDCXCKL5bD6K9fJlHqHiqTacejtiImz1wbgkik4wY3w2_toXb1wuEpbKGssTom3AvHROeZID3nstGAnf24CWMPPBO7ae_x0Ylz=w600"
      },
      {
        "id": "stanford-81",
        "title": "Stanford Gala 82",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN-SnKdn5aucBHHhYu6Zl8xZWvdeeTtd1mkdQIxE5jMTksi3o1iZvgoDZSdndEKGh3_ItLe-F4XGqqowaitaPLQEQtkuTrjG0vsybb9XTa9tdlvKYFd=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN-SnKdn5aucBHHhYu6Zl8xZWvdeeTtd1mkdQIxE5jMTksi3o1iZvgoDZSdndEKGh3_ItLe-F4XGqqowaitaPLQEQtkuTrjG0vsybb9XTa9tdlvKYFd=w600"
      },
      {
        "id": "stanford-82",
        "title": "Stanford Gala 83",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMIOuJMehcQ6M3v_espUoZaKnd1udtASqQ5G9Tyfw7JXkeXFAc6meBEeScRoMK1C1KnxtbsR47H1vGO4amyBUGKg4nfdEW5117CtVWZVZ_ZRBaQ07E6=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMIOuJMehcQ6M3v_espUoZaKnd1udtASqQ5G9Tyfw7JXkeXFAc6meBEeScRoMK1C1KnxtbsR47H1vGO4amyBUGKg4nfdEW5117CtVWZVZ_ZRBaQ07E6=w600"
      },
      {
        "id": "stanford-83",
        "title": "Stanford Gala 84",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZDtLJSULd3zSKmmH83z-bUvJevTMBFVBIQ5rIUR1ZCf364IDR-uao_zayczu0svDfYNT4T8akkXuV9ijYf5Puj2PJagqJguRy3ZFm77aW85mWZbBN=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNZDtLJSULd3zSKmmH83z-bUvJevTMBFVBIQ5rIUR1ZCf364IDR-uao_zayczu0svDfYNT4T8akkXuV9ijYf5Puj2PJagqJguRy3ZFm77aW85mWZbBN=w600"
      },
      {
        "id": "stanford-84",
        "title": "Stanford Gala 85",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOMUZptYyGi9MMIVY8HnHyauRvu-iPtrp6I79Uljo7Ox8Vp4k8UgOlC6TVYRUZUuS1KHVAAbqQZSO0f18s1V0kMJB1aEd8ealk7mBEADs-gr1AIxA4j=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOMUZptYyGi9MMIVY8HnHyauRvu-iPtrp6I79Uljo7Ox8Vp4k8UgOlC6TVYRUZUuS1KHVAAbqQZSO0f18s1V0kMJB1aEd8ealk7mBEADs-gr1AIxA4j=w600"
      },
      {
        "id": "stanford-85",
        "title": "Stanford Gala 86",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN9bNOLO4fJLtE1akUcwk7De9UEmhAtSOoNgVmaUJsDm2uj6qBR5Enhcy9IYQ5m6MId_9u_NZkfPu6fQIC5cKWSSrJzL3qqu8r2WZKYCX2JxptrS1tJ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN9bNOLO4fJLtE1akUcwk7De9UEmhAtSOoNgVmaUJsDm2uj6qBR5Enhcy9IYQ5m6MId_9u_NZkfPu6fQIC5cKWSSrJzL3qqu8r2WZKYCX2JxptrS1tJ=w600"
      },
      {
        "id": "stanford-86",
        "title": "Stanford Gala 87",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM-Do0FtTWuIvy_XRumx5uk08_8rDGzAVwQoAj6_HNltO7gojxlJQLbDMJNQNYWILa4LKCQP1zjLs8qpUTD5JDi9MX3hmZiLgJH4RpvRyuhE_U6EsAo=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM-Do0FtTWuIvy_XRumx5uk08_8rDGzAVwQoAj6_HNltO7gojxlJQLbDMJNQNYWILa4LKCQP1zjLs8qpUTD5JDi9MX3hmZiLgJH4RpvRyuhE_U6EsAo=w600"
      },
      {
        "id": "stanford-87",
        "title": "Stanford Gala 88",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNv95YMhOFU-Av3eYb1AgV-4s2JwRR6wmZ14vs6DoupU9xQCxmLrEooRm_ZffdAls7Hk_HDWTXueUkZH5n9l6Mr4hAYRpRjcOB2Iv_wCIrvdmP6cvf0=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNv95YMhOFU-Av3eYb1AgV-4s2JwRR6wmZ14vs6DoupU9xQCxmLrEooRm_ZffdAls7Hk_HDWTXueUkZH5n9l6Mr4hAYRpRjcOB2Iv_wCIrvdmP6cvf0=w600"
      },
      {
        "id": "stanford-88",
        "title": "Stanford Gala 89",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNgdPs3J5tJXm2np8CMi-BiVWm8Of2AYxv_zNi0aH33LAbMehtVhYhyLTWZHpd1BtSlxNEyztz-KNtneJCNgZKUUyq6qoRqn7e0qUBIaSkBrMzgTDh2=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNgdPs3J5tJXm2np8CMi-BiVWm8Of2AYxv_zNi0aH33LAbMehtVhYhyLTWZHpd1BtSlxNEyztz-KNtneJCNgZKUUyq6qoRqn7e0qUBIaSkBrMzgTDh2=w600"
      },
      {
        "id": "stanford-89",
        "title": "Stanford Gala 90",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPUGM1T9o7aZQy6lAjNBAbhA_mMl19TRQ7YTjpq1n9YGNbNgMEqJzfw89J-mDoqsIYZD2V7HRlqoGZEkzJSBVEgJ5GJdfeQhBYe832G2Ma2I_CgK0Vi=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPUGM1T9o7aZQy6lAjNBAbhA_mMl19TRQ7YTjpq1n9YGNbNgMEqJzfw89J-mDoqsIYZD2V7HRlqoGZEkzJSBVEgJ5GJdfeQhBYe832G2Ma2I_CgK0Vi=w600"
      },
      {
        "id": "stanford-90",
        "title": "Stanford Gala 91",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0Uev29Xo76IztSJEINF58p8xWTrp6NaYE84iMIzCFCC-F8-sN0M0GTxTsGUzOoJXnndVcFVyS-22FIEqx2coUJF94612ilVwpkk5Y-fVWW275kgmw=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0Uev29Xo76IztSJEINF58p8xWTrp6NaYE84iMIzCFCC-F8-sN0M0GTxTsGUzOoJXnndVcFVyS-22FIEqx2coUJF94612ilVwpkk5Y-fVWW275kgmw=w600"
      },
      {
        "id": "stanford-91",
        "title": "Stanford Gala 92",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO02ZBrCDQN6ADhpK1xTdv228dMFb4F-dJAg0H6bHs1OOuRYeOJn2uB8JPr_667ZIRw5tEnNctF5es9rOwjI6Uu0nw-cna-lMbrWGEjGCej_qjQn17X=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO02ZBrCDQN6ADhpK1xTdv228dMFb4F-dJAg0H6bHs1OOuRYeOJn2uB8JPr_667ZIRw5tEnNctF5es9rOwjI6Uu0nw-cna-lMbrWGEjGCej_qjQn17X=w600"
      },
      {
        "id": "stanford-92",
        "title": "Stanford Gala 93",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNxRBt0TVnYf-Tw6qpFtvuOowRz4AyTcBeg7Qryap5YlbxQoYpJ5A1HiVL-A7hO5ofvKdv9DOdwNiEobiIiaTnrOL4u3MO1HFWM8WWj6OVDj8oHPW8C=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNxRBt0TVnYf-Tw6qpFtvuOowRz4AyTcBeg7Qryap5YlbxQoYpJ5A1HiVL-A7hO5ofvKdv9DOdwNiEobiIiaTnrOL4u3MO1HFWM8WWj6OVDj8oHPW8C=w600"
      },
      {
        "id": "stanford-93",
        "title": "Stanford Gala 94",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMjIRRRRlKZzt5Uixu4uig7oRBv768w2hzbHlbEqW9bjj_czHanAxaDpDNdowfejB8zS29nB8OjXJ4v-XhZKY_i-mp5nUh0uoYrQ5XX7QoGY1E71bsv=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMjIRRRRlKZzt5Uixu4uig7oRBv768w2hzbHlbEqW9bjj_czHanAxaDpDNdowfejB8zS29nB8OjXJ4v-XhZKY_i-mp5nUh0uoYrQ5XX7QoGY1E71bsv=w600"
      },
      {
        "id": "stanford-94",
        "title": "Stanford Gala 95",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPhE9NUv_E6mdIgMJf0gFWKKs5r4QoLA_PvbwLjRJhDbkMPFj33Bc_gQvmZNrWrtjs6aCSGNDx9ZuLjnRhBN0z5ZcEYV9hB75uyONpgMKIoyQy6GJIk=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPhE9NUv_E6mdIgMJf0gFWKKs5r4QoLA_PvbwLjRJhDbkMPFj33Bc_gQvmZNrWrtjs6aCSGNDx9ZuLjnRhBN0z5ZcEYV9hB75uyONpgMKIoyQy6GJIk=w600"
      },
      {
        "id": "stanford-95",
        "title": "Stanford Gala 96",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPjQL6Ij8J7xt-TBSuDZmo9dens1exsqKthoAdHMpbb3hYlTuhewhxUMdmqnaM7fqKo8bxIR7kGdR9_kQfn0U_ZxO5d5KgpffGEiBaW4xSaRkuiRZMN=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPjQL6Ij8J7xt-TBSuDZmo9dens1exsqKthoAdHMpbb3hYlTuhewhxUMdmqnaM7fqKo8bxIR7kGdR9_kQfn0U_ZxO5d5KgpffGEiBaW4xSaRkuiRZMN=w600"
      },
      {
        "id": "stanford-96",
        "title": "Stanford Gala 97",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPtLtiqe5bOWMNRRD7-XzXMpmkf_bSfUdW9fq-957kzo1_4JjDG38rfnXubRjFZoc9-4oJCRQKPv4JffAw7YMK_TM9GphysP3_oCFluDntjTABDjzu-=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPtLtiqe5bOWMNRRD7-XzXMpmkf_bSfUdW9fq-957kzo1_4JjDG38rfnXubRjFZoc9-4oJCRQKPv4JffAw7YMK_TM9GphysP3_oCFluDntjTABDjzu-=w600"
      },
      {
        "id": "stanford-97",
        "title": "Stanford Gala 98",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMAt9dd9DaFVMjVnE4oiKUhhYvPsSchLdebs2xNAsgw48AYF_HCmudaMu9Apt6jt9_CNaoYZlOVxcyWde_uscXhcjH9mXg2sz_uRPuiR8gMMvj5idm3=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMAt9dd9DaFVMjVnE4oiKUhhYvPsSchLdebs2xNAsgw48AYF_HCmudaMu9Apt6jt9_CNaoYZlOVxcyWde_uscXhcjH9mXg2sz_uRPuiR8gMMvj5idm3=w600"
      },
      {
        "id": "stanford-98",
        "title": "Stanford Gala 99",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPWAIsybYt5Y4U6Wu-tmHAKWzW4OLoPDvQ1J16s1090QGya6h8LaraaYnzz2At6MtTCLII_PdNeWaEA5OD4jOjCegdlgAGWwN-tWBUWTVuv1Mc1jkRp=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPWAIsybYt5Y4U6Wu-tmHAKWzW4OLoPDvQ1J16s1090QGya6h8LaraaYnzz2At6MtTCLII_PdNeWaEA5OD4jOjCegdlgAGWwN-tWBUWTVuv1Mc1jkRp=w600"
      },
      {
        "id": "stanford-99",
        "title": "Stanford Gala 100",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO77rSmQUU2kAFEcOPwR6maJcB9dzVsIEePTIbAZWoMQvqw0eh3ft8WE68b6EccYhsAkrLqjDC21PSS2K02O8NB7cwMgdRCl3S19bbQFaIVryC-2tnw=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO77rSmQUU2kAFEcOPwR6maJcB9dzVsIEePTIbAZWoMQvqw0eh3ft8WE68b6EccYhsAkrLqjDC21PSS2K02O8NB7cwMgdRCl3S19bbQFaIVryC-2tnw=w600"
      },
      {
        "id": "stanford-100",
        "title": "Stanford Gala 101",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP-ZtEzCc0YOOg3_24lF_R3Mag2Xrdytxr1-EpTB9gz80am3FfklvqMJQ46PhYDB7ASO1S-oCqFQCnIIPL7jJBC8ne-9Gy1-uKseBkD23B3ZIWFf4TL=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP-ZtEzCc0YOOg3_24lF_R3Mag2Xrdytxr1-EpTB9gz80am3FfklvqMJQ46PhYDB7ASO1S-oCqFQCnIIPL7jJBC8ne-9Gy1-uKseBkD23B3ZIWFf4TL=w600"
      },
      {
        "id": "stanford-101",
        "title": "Stanford Gala 102",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPWG0EyC6kqjyUbSvtGTokxIQBzEFs_Dit9vcuLT_qy-VtnB1rbOEUx8t2UhoAhfsjsDGJ17kWT6jkhC14MJIqkKfNzJMJ4gx8fsHnSyrF1oUTzFU6c=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPWG0EyC6kqjyUbSvtGTokxIQBzEFs_Dit9vcuLT_qy-VtnB1rbOEUx8t2UhoAhfsjsDGJ17kWT6jkhC14MJIqkKfNzJMJ4gx8fsHnSyrF1oUTzFU6c=w600"
      },
      {
        "id": "stanford-102",
        "title": "Stanford Gala 103",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM3r6uFRBriCwrXosGkzjxr_nkXq0qnYMP8JQ7dUsU0h_lq_uAq6pxeaOFb-qtUITPK_EdyJ4hjiu2booSPmcy5Ferzr19sRiRnlnPlfF7h8yGRnRY0=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM3r6uFRBriCwrXosGkzjxr_nkXq0qnYMP8JQ7dUsU0h_lq_uAq6pxeaOFb-qtUITPK_EdyJ4hjiu2booSPmcy5Ferzr19sRiRnlnPlfF7h8yGRnRY0=w600"
      },
      {
        "id": "stanford-103",
        "title": "Stanford Gala 104",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOZ6Ds3BdHFYgUhfiIOcI6L-OGuYNIYayZ23uwzzI2kQr05Us6hkreAvC0yam54KFm6hUAcbh_HqVh2nyAY9OA5Wdlut3jW6Jw5lbkjs2xiQ2Wz8JfY=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOZ6Ds3BdHFYgUhfiIOcI6L-OGuYNIYayZ23uwzzI2kQr05Us6hkreAvC0yam54KFm6hUAcbh_HqVh2nyAY9OA5Wdlut3jW6Jw5lbkjs2xiQ2Wz8JfY=w600"
      },
      {
        "id": "stanford-104",
        "title": "Stanford Gala 105",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMtO3oQV2x_F7m6S6BRWltYnEicmxyDeAPXx7JRi86L5fFeXtadiQlatak0VOlDBUBrFHbO0WQJQ3hidQc2eCf7b5RNolgEsOi5aIvkcrK3KmNiZW5A=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMtO3oQV2x_F7m6S6BRWltYnEicmxyDeAPXx7JRi86L5fFeXtadiQlatak0VOlDBUBrFHbO0WQJQ3hidQc2eCf7b5RNolgEsOi5aIvkcrK3KmNiZW5A=w600"
      },
      {
        "id": "stanford-105",
        "title": "Stanford Gala 106",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNbWVfs6OAv-fLtAUHsC3Yjvb4b3muEPs3VE_KjKAfmANUFf8X9ouK87eBs-wMm-u0I7PXCNcKcQnCzRb3ZWs0CguyBve6UnOf9Z6fBwdB7OerP9RKj=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNbWVfs6OAv-fLtAUHsC3Yjvb4b3muEPs3VE_KjKAfmANUFf8X9ouK87eBs-wMm-u0I7PXCNcKcQnCzRb3ZWs0CguyBve6UnOf9Z6fBwdB7OerP9RKj=w600"
      },
      {
        "id": "stanford-106",
        "title": "Stanford Gala 107",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOZf3zUBscLw2PEKjEBWdY0-BpatGG-YIZ_yq8Ag9JCUMjqk4lXLLdgPtORg2gRzlVgT3Tx9IK41v4GXyxMDYAHK9O-GsGFGAdHamP8-xwj04wMGNcH=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOZf3zUBscLw2PEKjEBWdY0-BpatGG-YIZ_yq8Ag9JCUMjqk4lXLLdgPtORg2gRzlVgT3Tx9IK41v4GXyxMDYAHK9O-GsGFGAdHamP8-xwj04wMGNcH=w600"
      },
      {
        "id": "stanford-107",
        "title": "Stanford Gala 108",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNbWYkXAaYnG1TV-5CT6KkQomrQpm8_wNGU58Ot7w4TH_NcwMIV-gu_tXzSEc8kewSwUKDA_OLqztqm5RENJ1qVyLNQ4H3Nop7aNu65rtXjnxq1kV0B=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNbWYkXAaYnG1TV-5CT6KkQomrQpm8_wNGU58Ot7w4TH_NcwMIV-gu_tXzSEc8kewSwUKDA_OLqztqm5RENJ1qVyLNQ4H3Nop7aNu65rtXjnxq1kV0B=w600"
      },
      {
        "id": "stanford-108",
        "title": "Stanford Gala 109",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMf_vgzU8TvdL8cvAMZbQPBjaI8fOvfaoiw1AjYxZdW1a0obGhDL4OljjJTZ3mgXWvmNEk-Ad1PRGXjbXopQxbZl1PBo6D61Irzf_Br_iIqmiawG5R8=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMf_vgzU8TvdL8cvAMZbQPBjaI8fOvfaoiw1AjYxZdW1a0obGhDL4OljjJTZ3mgXWvmNEk-Ad1PRGXjbXopQxbZl1PBo6D61Irzf_Br_iIqmiawG5R8=w600"
      },
      {
        "id": "stanford-109",
        "title": "Stanford Gala 110",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNpG0F1YwkxD7ghnjVgc60GpU7fdcZN0jGCHMnoQcm4HU_j-IvtsuJgsPH2noTX9DKeZHsjB4fXIxXrdKEhLbI3es8JwJSJsVJzCvQ1Tco9eCXRv8WK=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNpG0F1YwkxD7ghnjVgc60GpU7fdcZN0jGCHMnoQcm4HU_j-IvtsuJgsPH2noTX9DKeZHsjB4fXIxXrdKEhLbI3es8JwJSJsVJzCvQ1Tco9eCXRv8WK=w600"
      },
      {
        "id": "stanford-110",
        "title": "Stanford Gala 111",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP2jXH6su9_tOv_ZHkIn3so5b3yFiC_ZANEMfkHPoE_5m-GIKu5n0u4_Hx6TEDXZjIw8_BvxEN55oRojG9nyU4aEjPjLYGR-X1Xaib63l9-zQ88nAeH=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP2jXH6su9_tOv_ZHkIn3so5b3yFiC_ZANEMfkHPoE_5m-GIKu5n0u4_Hx6TEDXZjIw8_BvxEN55oRojG9nyU4aEjPjLYGR-X1Xaib63l9-zQ88nAeH=w600"
      },
      {
        "id": "stanford-111",
        "title": "Stanford Gala 112",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMbiYRFzQ949mAZDtCPDSgI48t8cnk0EMgZeEJT0ZE5WCH9JZteIJ1uJGA80kNYxmGt9X4gJwkxPshl8djS7uX_1hVnR4ZyHV1kDUKEH0PtUiXBsmKQ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMbiYRFzQ949mAZDtCPDSgI48t8cnk0EMgZeEJT0ZE5WCH9JZteIJ1uJGA80kNYxmGt9X4gJwkxPshl8djS7uX_1hVnR4ZyHV1kDUKEH0PtUiXBsmKQ=w600"
      },
      {
        "id": "stanford-112",
        "title": "Stanford Gala 113",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOkCWRmUgBknqenDqpVPqIGrXVtgZUKQ4sSY9CoQ2lopEbbhm68RsM3Yu3TAAIPix_wylsPRk9825ifdZNz8ikvGsQ1ENaCTVz-3DWGTfE2MlWCCw02=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOkCWRmUgBknqenDqpVPqIGrXVtgZUKQ4sSY9CoQ2lopEbbhm68RsM3Yu3TAAIPix_wylsPRk9825ifdZNz8ikvGsQ1ENaCTVz-3DWGTfE2MlWCCw02=w600"
      },
      {
        "id": "stanford-113",
        "title": "Stanford Gala 114",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNidjpehDaVLADZawoCyU6Eog6jGgyQicLcKGAs84yPO1ySNhsWxbbHQ-O2S-HRd7eaJeOg3UUl3QfFCjgsxRa9fmmLYG1NmZjq4as0-fE6BMnxVWH7=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNidjpehDaVLADZawoCyU6Eog6jGgyQicLcKGAs84yPO1ySNhsWxbbHQ-O2S-HRd7eaJeOg3UUl3QfFCjgsxRa9fmmLYG1NmZjq4as0-fE6BMnxVWH7=w600"
      },
      {
        "id": "stanford-114",
        "title": "Stanford Gala 115",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPFOXweY1cK9e6_uKeZSl6mCPx4ukTSpOdX_FnTe0s92VePLWtv5aWol9AX2C0IcRVkOePNEERY51ZXep0-gUvZn039v7atn9ix3KeTi7ZI4xDjI6GW=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPFOXweY1cK9e6_uKeZSl6mCPx4ukTSpOdX_FnTe0s92VePLWtv5aWol9AX2C0IcRVkOePNEERY51ZXep0-gUvZn039v7atn9ix3KeTi7ZI4xDjI6GW=w600"
      },
      {
        "id": "stanford-115",
        "title": "Stanford Gala 116",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO5aSxF5RpPy3a6AYsKjKbQllTNLajsWzu7m47obUfAu7dQskLpeqVhawWtC6M-N-qKUThmzTs3yZG0P3r5xav_Cbu0M9v1WL9oa200p81nBeDACwc0=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO5aSxF5RpPy3a6AYsKjKbQllTNLajsWzu7m47obUfAu7dQskLpeqVhawWtC6M-N-qKUThmzTs3yZG0P3r5xav_Cbu0M9v1WL9oa200p81nBeDACwc0=w600"
      },
      {
        "id": "stanford-116",
        "title": "Stanford Gala 117",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPNDnz8BpAACk8W4kWyh-43WU-blyiZStzsroVY0SLJKl9P6vSCax12WYntsNRzuK-fkbpOB87gZPNyedtCJS69aAUzINgKMlPQ7Ysx1VqAySFqwhka=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPNDnz8BpAACk8W4kWyh-43WU-blyiZStzsroVY0SLJKl9P6vSCax12WYntsNRzuK-fkbpOB87gZPNyedtCJS69aAUzINgKMlPQ7Ysx1VqAySFqwhka=w600"
      },
      {
        "id": "stanford-117",
        "title": "Stanford Gala 118",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNbQhvYg2h18hC1Bq65iK0TLJI40JKUO01LLletq21pSHpTEwZGC-g341hCRJf-dNCTf1bhcdzm3P4ww3ZtEL2mVuslRdmSJtFJ0sSDSsrbv_3NVjyc=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNbQhvYg2h18hC1Bq65iK0TLJI40JKUO01LLletq21pSHpTEwZGC-g341hCRJf-dNCTf1bhcdzm3P4ww3ZtEL2mVuslRdmSJtFJ0sSDSsrbv_3NVjyc=w600"
      },
      {
        "id": "stanford-118",
        "title": "Stanford Gala 119",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMj5KxS65LOh5utrV7pMdhuT17_CdPou7Yv4HOxvrODWR66MsGV8g0jubtFSyYD6iWOKznEHLZbWS6JBG7TH0_maCNHoj1HmhHdgwVfvQMio8pKEy1-=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMj5KxS65LOh5utrV7pMdhuT17_CdPou7Yv4HOxvrODWR66MsGV8g0jubtFSyYD6iWOKznEHLZbWS6JBG7TH0_maCNHoj1HmhHdgwVfvQMio8pKEy1-=w600"
      },
      {
        "id": "stanford-119",
        "title": "Stanford Gala 120",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO08Cxc_phWquqZS7gVR2CpOcb80zg7Le2ixWct0A-uk9ffejWurAHfIiPz_zksnAa4DIECvlELEJzWgbTVo7E5V3kw6W63YI3FwjhvjG65gkQ8aLWP=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO08Cxc_phWquqZS7gVR2CpOcb80zg7Le2ixWct0A-uk9ffejWurAHfIiPz_zksnAa4DIECvlELEJzWgbTVo7E5V3kw6W63YI3FwjhvjG65gkQ8aLWP=w600"
      },
      {
        "id": "stanford-120",
        "title": "Stanford Gala 121",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNWKacP0-kCK91D3_2zNj2uoYaupQusJPlblE-E4n97IfGHYity7n1vdElu5aFb7oR7ov4uKmtnRwfcdbCIjzD1cyhxMB0uDB9ZHbLefFZtsQed4BPg=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNWKacP0-kCK91D3_2zNj2uoYaupQusJPlblE-E4n97IfGHYity7n1vdElu5aFb7oR7ov4uKmtnRwfcdbCIjzD1cyhxMB0uDB9ZHbLefFZtsQed4BPg=w600"
      },
      {
        "id": "stanford-121",
        "title": "Stanford Gala 122",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMb0sxtOnS7suMhP1W0SytjBiJwS7uWrS2P1zcxor7wXPVnfN4XOyq9r45nGMF3ERtbxDqo3qCiUIToo982A4GokLgH__nzXo6_vad7IiZo3ahvAR0m=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMb0sxtOnS7suMhP1W0SytjBiJwS7uWrS2P1zcxor7wXPVnfN4XOyq9r45nGMF3ERtbxDqo3qCiUIToo982A4GokLgH__nzXo6_vad7IiZo3ahvAR0m=w600"
      },
      {
        "id": "stanford-122",
        "title": "Stanford Gala 123",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPBImiORgMqpvw-cWsaEL57xA6EXe95dw4RMDj4o3lGGNEjtfhQynwyPO4oG3cbp_-MidvoWKnWW5HeA5O14H8-4UNrww6gp_r5rGdHKPQGQ35srg-T=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPBImiORgMqpvw-cWsaEL57xA6EXe95dw4RMDj4o3lGGNEjtfhQynwyPO4oG3cbp_-MidvoWKnWW5HeA5O14H8-4UNrww6gp_r5rGdHKPQGQ35srg-T=w600"
      },
      {
        "id": "stanford-123",
        "title": "Stanford Gala 124",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPrH6nLpr3c-gkWPb13OxtQqaiujGzoUeNAmno0TrebNN8-gsSyYnMftzfxvN1ObNnbCABKUNKAbCJSEXvIoS5ivIGVZY1Dx3otDbVfVpBohaAt9GHG=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPrH6nLpr3c-gkWPb13OxtQqaiujGzoUeNAmno0TrebNN8-gsSyYnMftzfxvN1ObNnbCABKUNKAbCJSEXvIoS5ivIGVZY1Dx3otDbVfVpBohaAt9GHG=w600"
      },
      {
        "id": "stanford-124",
        "title": "Stanford Gala 125",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMIgcuO-gic0iEMk5IrGJUTl7ZtnfQFsia7aA4rANft01TZhgDjVoq4CULrHatBNpoTr8snStijDo2IX5ReIr1iTDjyR7FLo00mxu_X7TrNnS2sA2FC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMIgcuO-gic0iEMk5IrGJUTl7ZtnfQFsia7aA4rANft01TZhgDjVoq4CULrHatBNpoTr8snStijDo2IX5ReIr1iTDjyR7FLo00mxu_X7TrNnS2sA2FC=w600"
      },
      {
        "id": "stanford-125",
        "title": "Stanford Gala 126",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOwrXGeSiThvY8P09jCHzvyMAHsshWD2k_X7PJm1TV3HbvMK_zdWx_JPlION2Kv8FZhEoWedgyjq-_oA0rZ5zbogMG90kguKMTZK9-qpysM1sZUGeNf=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOwrXGeSiThvY8P09jCHzvyMAHsshWD2k_X7PJm1TV3HbvMK_zdWx_JPlION2Kv8FZhEoWedgyjq-_oA0rZ5zbogMG90kguKMTZK9-qpysM1sZUGeNf=w600"
      },
      {
        "id": "stanford-126",
        "title": "Stanford Gala 127",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMivNDoXkgEt2m36qqgButf4GggxstjZ5uVsjg0UyubxgbQJRsyfEPcZpHdKRAHeBYCP-CX9_NVardIZpMvzsAI_lQhY-M-WCOzeGEqsz53jyhShcJ5=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMivNDoXkgEt2m36qqgButf4GggxstjZ5uVsjg0UyubxgbQJRsyfEPcZpHdKRAHeBYCP-CX9_NVardIZpMvzsAI_lQhY-M-WCOzeGEqsz53jyhShcJ5=w600"
      },
      {
        "id": "stanford-127",
        "title": "Stanford Gala 128",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMAW38zbf22Yd0n0qE0E5ZJ8-DNJ6NzrHTRN0PNIkg7NFdeMwRK9QvKy8APo4az4LTaoG6-xoqSjpt8SpLTkT0Uq5yUrYx6RjTCVxAQDaTuzwUQ4GeP=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMAW38zbf22Yd0n0qE0E5ZJ8-DNJ6NzrHTRN0PNIkg7NFdeMwRK9QvKy8APo4az4LTaoG6-xoqSjpt8SpLTkT0Uq5yUrYx6RjTCVxAQDaTuzwUQ4GeP=w600"
      },
      {
        "id": "stanford-128",
        "title": "Stanford Gala 129",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN9jGOHIujLLzYXfSUpwUv45ayU_zNtvNzwizK7ZdRv7A63aihfVGHk4C9MyKSKsguDTXFfRi7wAB8NIzj0gULJthgHOZATWUzepXdOJlL6wy68s5JF=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN9jGOHIujLLzYXfSUpwUv45ayU_zNtvNzwizK7ZdRv7A63aihfVGHk4C9MyKSKsguDTXFfRi7wAB8NIzj0gULJthgHOZATWUzepXdOJlL6wy68s5JF=w600"
      },
      {
        "id": "stanford-129",
        "title": "Stanford Gala 130",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN9c0VPg0VXxg8UDWMrr7zPxdbZkLx8L_vSuYogbfe-PUm4Xhd2zZzyoaNHLax034ESy95Xw9DbiHrGPDNPRV_7YWSbvmWSkcAmJHCzOpq4_C72feRs=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN9c0VPg0VXxg8UDWMrr7zPxdbZkLx8L_vSuYogbfe-PUm4Xhd2zZzyoaNHLax034ESy95Xw9DbiHrGPDNPRV_7YWSbvmWSkcAmJHCzOpq4_C72feRs=w600"
      },
      {
        "id": "stanford-130",
        "title": "Stanford Gala 131",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMRqNvxU78XLwaKeJZC_3DTFvBLmP0zQZxHK0craxNP0JL3wKOBxIWF9r7lxoye9NfQzU_c2X5qWgdhKjJWbykMqF-3_pEigSj1WTMkWv2SbgC1Cima=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMRqNvxU78XLwaKeJZC_3DTFvBLmP0zQZxHK0craxNP0JL3wKOBxIWF9r7lxoye9NfQzU_c2X5qWgdhKjJWbykMqF-3_pEigSj1WTMkWv2SbgC1Cima=w600"
      },
      {
        "id": "stanford-131",
        "title": "Stanford Gala 132",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOxIEHxPsDlsl2YVuBzf2GUZujjPbh2YU_Rx_9BM95fll32N7xjMSq1o6BcOgeYubwEVZ2vvPAVImMT2ljqSHtrMJ1QMaSJzbChx-IwXlCRC5gPQgpR=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOxIEHxPsDlsl2YVuBzf2GUZujjPbh2YU_Rx_9BM95fll32N7xjMSq1o6BcOgeYubwEVZ2vvPAVImMT2ljqSHtrMJ1QMaSJzbChx-IwXlCRC5gPQgpR=w600"
      },
      {
        "id": "stanford-132",
        "title": "Stanford Gala 133",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMB1nPik2lZdGEsrKyFBe3PUowH8mzYr0r_ycDAKJ7actsFmr2FQadA4plLXxaowLDx89h2mgynohowp49JlWy7VIzWMAyJdM7jgnOB3uBfO0-mnijc=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMB1nPik2lZdGEsrKyFBe3PUowH8mzYr0r_ycDAKJ7actsFmr2FQadA4plLXxaowLDx89h2mgynohowp49JlWy7VIzWMAyJdM7jgnOB3uBfO0-mnijc=w600"
      },
      {
        "id": "stanford-133",
        "title": "Stanford Gala 134",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPm6w78YcAXkZkP77NBb27I6uBTqSc3WZMhk4Y9H0B6KwZGyjwIJo7GHNbgqpYkWGDGWnso_AAgYLRmjyKE05igkrxm7r53zPVztxlwhGC5bWhc_tWm=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPm6w78YcAXkZkP77NBb27I6uBTqSc3WZMhk4Y9H0B6KwZGyjwIJo7GHNbgqpYkWGDGWnso_AAgYLRmjyKE05igkrxm7r53zPVztxlwhGC5bWhc_tWm=w600"
      },
      {
        "id": "stanford-134",
        "title": "Stanford Gala 135",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNbzj4aBwYdz6kCxMXRBYJN60S3kCFj3rzF92_4ScVjIfgu-JYWA-nIapT8NH_Hq3sRRc94GEovJ1aU5QIwv9kKbSvubLY7AUCHEGpTuyTt9eBdg6Yg=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNbzj4aBwYdz6kCxMXRBYJN60S3kCFj3rzF92_4ScVjIfgu-JYWA-nIapT8NH_Hq3sRRc94GEovJ1aU5QIwv9kKbSvubLY7AUCHEGpTuyTt9eBdg6Yg=w600"
      },
      {
        "id": "stanford-135",
        "title": "Stanford Gala 136",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOWiSjT2atdoxcigVAcsOk4VaH7oVsdbzRCrg-0lnvOAocfHuts8_cvVbZyb4q8xX5UMFQwHZDln4imydtpFHb7ZKLWG0bS5EG-xpY1DucrYC65niGm=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOWiSjT2atdoxcigVAcsOk4VaH7oVsdbzRCrg-0lnvOAocfHuts8_cvVbZyb4q8xX5UMFQwHZDln4imydtpFHb7ZKLWG0bS5EG-xpY1DucrYC65niGm=w600"
      },
      {
        "id": "stanford-136",
        "title": "Stanford Gala 137",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNPCY38Yf1UEcCU7SHaQGe969VaesU67TZlc7-hBvzqEpn208KxOal9X8g4EF0BdgrSqinevlKrEOcaO4kzhZmE33gbWXXD2epl4L4BLxyNJvy-HS1W=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNPCY38Yf1UEcCU7SHaQGe969VaesU67TZlc7-hBvzqEpn208KxOal9X8g4EF0BdgrSqinevlKrEOcaO4kzhZmE33gbWXXD2epl4L4BLxyNJvy-HS1W=w600"
      },
      {
        "id": "stanford-137",
        "title": "Stanford Gala 138",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPz4bVP63SfyOgGFq6QZ7cIh_uEvLFljNgCkZxJT_PBR5xu_duvm-75s_C-h_Xd2R1lbXGOZTp1FEtsqYs_axrO4rXDqSBqt7HQGnnPOnoRpKYno2sD=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPz4bVP63SfyOgGFq6QZ7cIh_uEvLFljNgCkZxJT_PBR5xu_duvm-75s_C-h_Xd2R1lbXGOZTp1FEtsqYs_axrO4rXDqSBqt7HQGnnPOnoRpKYno2sD=w600"
      },
      {
        "id": "stanford-138",
        "title": "Stanford Gala 139",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMICZrRTKmIJCuWV1AuWGAobUgpvXU8EJBQd-9NwML36-ahL0pRhsneJCQSJDfcyJQriuD8cKQBm9-rLUeIQxUnjY-2zczZum0w3kkTrc8QdMPtpSbC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMICZrRTKmIJCuWV1AuWGAobUgpvXU8EJBQd-9NwML36-ahL0pRhsneJCQSJDfcyJQriuD8cKQBm9-rLUeIQxUnjY-2zczZum0w3kkTrc8QdMPtpSbC=w600"
      },
      {
        "id": "stanford-139",
        "title": "Stanford Gala 140",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN8BpopHk1TmQ8wHLswJ4HHmN1DAS7qrhxjHOlMaA-i3p6_tFnb6BvQwKVdxB9DhmvkeSLaNfOSEtfBzRBj0tQxnGWIZqeL-1VoK0ZXXGKmzs61n1au=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN8BpopHk1TmQ8wHLswJ4HHmN1DAS7qrhxjHOlMaA-i3p6_tFnb6BvQwKVdxB9DhmvkeSLaNfOSEtfBzRBj0tQxnGWIZqeL-1VoK0ZXXGKmzs61n1au=w600"
      },
      {
        "id": "stanford-140",
        "title": "Stanford Gala 141",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPqHW9SzQ5tlfztipfIfqF1eDv97ffFWtM7b2UKcy71SrhHHQb17M9xgp3E82mRqCzp_47UFDVWWoTNvqzf83xkgRxbCRDjcQKh6XXu7EtoX9qHzDlS=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPqHW9SzQ5tlfztipfIfqF1eDv97ffFWtM7b2UKcy71SrhHHQb17M9xgp3E82mRqCzp_47UFDVWWoTNvqzf83xkgRxbCRDjcQKh6XXu7EtoX9qHzDlS=w600"
      },
      {
        "id": "stanford-141",
        "title": "Stanford Gala 142",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM4__XwPGD849te1Fijjpb9qY9fj4Nz9YFsL6MoCsyKFrT4EjkorAIgb21QM_EOOlT7kKj8kk96SRpAGynBlRX7T2SpLS2yjP6nquKeRBy1HIDFcP6s=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM4__XwPGD849te1Fijjpb9qY9fj4Nz9YFsL6MoCsyKFrT4EjkorAIgb21QM_EOOlT7kKj8kk96SRpAGynBlRX7T2SpLS2yjP6nquKeRBy1HIDFcP6s=w600"
      },
      {
        "id": "stanford-142",
        "title": "Stanford Gala 143",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMucA7D8nTqcGPEftOINRtW0CIbkDDhNQwf5i8ZhR8jcBvnNdTksK8-ryUfpSQQhuurh41vSBohAv2TU4W4mxKYRo-9xUTG7iG3SPMWY3LsZ6SH93v4=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMucA7D8nTqcGPEftOINRtW0CIbkDDhNQwf5i8ZhR8jcBvnNdTksK8-ryUfpSQQhuurh41vSBohAv2TU4W4mxKYRo-9xUTG7iG3SPMWY3LsZ6SH93v4=w600"
      },
      {
        "id": "stanford-143",
        "title": "Stanford Gala 144",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOHV8WTk_YL3NLNX00VxJ1jbYZlUfxjLjy7v0JD48Okmkkk3WB78pAMn86PN2QNgEBvuHvh4bt9unY5l8ID9P6cgZU-OJARXEEhJ3ZMedfTO6Gcf-my=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOHV8WTk_YL3NLNX00VxJ1jbYZlUfxjLjy7v0JD48Okmkkk3WB78pAMn86PN2QNgEBvuHvh4bt9unY5l8ID9P6cgZU-OJARXEEhJ3ZMedfTO6Gcf-my=w600"
      },
      {
        "id": "stanford-144",
        "title": "Stanford Gala 145",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN4GKTg41Rf-W-ccOd4ZXUate3uFtMGrXZcO6wC-0BeJuWrIMBiLmeGyiDrL1lf6RYT3ZbAQGjCvd0buxiXf6hngG-2vikjVPdfcGX1sNqoBsDYmCvH=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN4GKTg41Rf-W-ccOd4ZXUate3uFtMGrXZcO6wC-0BeJuWrIMBiLmeGyiDrL1lf6RYT3ZbAQGjCvd0buxiXf6hngG-2vikjVPdfcGX1sNqoBsDYmCvH=w600"
      },
      {
        "id": "stanford-145",
        "title": "Stanford Gala 146",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNXedz8rSTsFkVzUGF9Ik0LqZ6Wk9c7EX3fx0EqcyWpWRMjcYo9z14vlQmKFRDt0S0TOsi4XgFEl4j5JhIQ7mcyt5YAZ_40YcK0W1l7qkURg8ypubhq=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNXedz8rSTsFkVzUGF9Ik0LqZ6Wk9c7EX3fx0EqcyWpWRMjcYo9z14vlQmKFRDt0S0TOsi4XgFEl4j5JhIQ7mcyt5YAZ_40YcK0W1l7qkURg8ypubhq=w600"
      },
      {
        "id": "stanford-146",
        "title": "Stanford Gala 147",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO-4gV5M3PBjAAMqVUjqPqhMwOwFGN85tWK5e3qPltMwQQfB8PJlDha6ArZ2foGRT1nU5tKX4GtE5gtps4nDBXZPSNDVR8DuIyytmZadQd0QYNSJbPv=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO-4gV5M3PBjAAMqVUjqPqhMwOwFGN85tWK5e3qPltMwQQfB8PJlDha6ArZ2foGRT1nU5tKX4GtE5gtps4nDBXZPSNDVR8DuIyytmZadQd0QYNSJbPv=w600"
      },
      {
        "id": "stanford-147",
        "title": "Stanford Gala 148",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN6hygCJhZALEMMCRMF0dVLdMwUwNUQFhE3DbFRGqONgGxwuTkxZIqJ14i64ugPRfgnKMgQoUpFKVH4OuIh9Roa2zgXzmZ0YvDe7L30oiU7UNGagfvp=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN6hygCJhZALEMMCRMF0dVLdMwUwNUQFhE3DbFRGqONgGxwuTkxZIqJ14i64ugPRfgnKMgQoUpFKVH4OuIh9Roa2zgXzmZ0YvDe7L30oiU7UNGagfvp=w600"
      },
      {
        "id": "stanford-148",
        "title": "Stanford Gala 149",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNppuc7cwzDuJcJrnEg-AhTZERWSdZ-m5s1Uc9E3dxVC0wINfLr9I5ZWu8zzSnZhC1GPjbvSQHBDT5hrNNHBvYiSrZOcqJnIKLo1Wr-31ACOFM03j_7=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNppuc7cwzDuJcJrnEg-AhTZERWSdZ-m5s1Uc9E3dxVC0wINfLr9I5ZWu8zzSnZhC1GPjbvSQHBDT5hrNNHBvYiSrZOcqJnIKLo1Wr-31ACOFM03j_7=w600"
      },
      {
        "id": "stanford-149",
        "title": "Stanford Gala 150",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMHwRv1tW6e3z1wXGEHYbWR5-0chf7dw1gr2lSH_hMGtBrJGJzlw70AjpXQazjkVoKwENPZoLtmMYvc8MNCKJuCymtuaiAaT5n5SwoPGy3zZ4O2Zu3M=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMHwRv1tW6e3z1wXGEHYbWR5-0chf7dw1gr2lSH_hMGtBrJGJzlw70AjpXQazjkVoKwENPZoLtmMYvc8MNCKJuCymtuaiAaT5n5SwoPGy3zZ4O2Zu3M=w600"
      },
      {
        "id": "stanford-150",
        "title": "Stanford Gala 151",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM7iBDlVhIwz0KA4N-s1B9ZFHGvC0l-yFkdAqYQsKo4Q6a0TtkS4ldtsU6KFUEsWt7bDqq9rT3XV_KMYoXFwBx6mpPyZKTDzVeTPeUK36AUqYBpoZjy=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM7iBDlVhIwz0KA4N-s1B9ZFHGvC0l-yFkdAqYQsKo4Q6a0TtkS4ldtsU6KFUEsWt7bDqq9rT3XV_KMYoXFwBx6mpPyZKTDzVeTPeUK36AUqYBpoZjy=w600"
      },
      {
        "id": "stanford-151",
        "title": "Stanford Gala 152",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPRdzYnK5jk5hWZte95rUEumD-inCZx6s2Rde9cjvQN7Ed5YRR_4mfYiUVDAEZ8rcN59BiFTFSmPri1BkQFu2pvS5COjX2gJRbH3Qa7zxZ6Zjc6fi37=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPRdzYnK5jk5hWZte95rUEumD-inCZx6s2Rde9cjvQN7Ed5YRR_4mfYiUVDAEZ8rcN59BiFTFSmPri1BkQFu2pvS5COjX2gJRbH3Qa7zxZ6Zjc6fi37=w600"
      },
      {
        "id": "stanford-152",
        "title": "Stanford Gala 153",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNC04Bk_tatYHWDT0g6EjLohWE8C9GcZzkV9EuFH0yFJIiBvRQZYQ-EtoyJ5x37NZZNry1CGLQhQrXONaJV6eGC2-duf4bs2QUBdqwL7xIzFx34N4G7=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNC04Bk_tatYHWDT0g6EjLohWE8C9GcZzkV9EuFH0yFJIiBvRQZYQ-EtoyJ5x37NZZNry1CGLQhQrXONaJV6eGC2-duf4bs2QUBdqwL7xIzFx34N4G7=w600"
      },
      {
        "id": "stanford-153",
        "title": "Stanford Gala 154",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNAiub1S7Iswyfo5OUuo6fNSdCYLupTbBUooGvqRzmmIg0SzFMTo4ZEVX46artapTGfar_EwlMNk-k9XQ9T-qRBZnbvySeSzDwPYJQU9AGH69Hr2R6D=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNAiub1S7Iswyfo5OUuo6fNSdCYLupTbBUooGvqRzmmIg0SzFMTo4ZEVX46artapTGfar_EwlMNk-k9XQ9T-qRBZnbvySeSzDwPYJQU9AGH69Hr2R6D=w600"
      },
      {
        "id": "stanford-154",
        "title": "Stanford Gala 155",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN_Y_sKAFWCDhOS81eTy1ErqLdNN3X63WxsfMslOAdz-0q3qPkaUDB2w6DHysLGAgwk5slsFcJ9ZHToNHS-oaNwdFmcE-CmflZYpZGfaT0yKnhaAOSu=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN_Y_sKAFWCDhOS81eTy1ErqLdNN3X63WxsfMslOAdz-0q3qPkaUDB2w6DHysLGAgwk5slsFcJ9ZHToNHS-oaNwdFmcE-CmflZYpZGfaT0yKnhaAOSu=w600"
      },
      {
        "id": "stanford-155",
        "title": "Stanford Gala 156",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNnpN-P5NQo7u6wjwqmgoJvYSC-cUWz5hfkBi9p2RdUwPHPP34-dqsPH1SZFr007iLqB-xKh39tD_v6yS5HLI_zNA-VCMODNPv0CHt8PJwH6WtFcn7c=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNnpN-P5NQo7u6wjwqmgoJvYSC-cUWz5hfkBi9p2RdUwPHPP34-dqsPH1SZFr007iLqB-xKh39tD_v6yS5HLI_zNA-VCMODNPv0CHt8PJwH6WtFcn7c=w600"
      },
      {
        "id": "stanford-156",
        "title": "Stanford Gala 157",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNHVJhPFPXv_rEL67eHaBGaM2FPVDa0hrHVywkX2REJb5ssBEiWuxM_BDXjPMSyIfbimFt_g7quznIo71sB__cqGuZQ2Pw81fZNYSEnXWFDpO6Sn3b2=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNHVJhPFPXv_rEL67eHaBGaM2FPVDa0hrHVywkX2REJb5ssBEiWuxM_BDXjPMSyIfbimFt_g7quznIo71sB__cqGuZQ2Pw81fZNYSEnXWFDpO6Sn3b2=w600"
      },
      {
        "id": "stanford-157",
        "title": "Stanford Gala 158",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPGr_5nJEE9DZyuUt8cHDrw5UiLmNomqEO92S1ezI6DqgQt7lGW5CBJCpVpgS4C854PdpU-oRFCmjIEaVXqi_bL9RW36d2RnqoZrgcwWrSOL86y4NPx=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPGr_5nJEE9DZyuUt8cHDrw5UiLmNomqEO92S1ezI6DqgQt7lGW5CBJCpVpgS4C854PdpU-oRFCmjIEaVXqi_bL9RW36d2RnqoZrgcwWrSOL86y4NPx=w600"
      },
      {
        "id": "stanford-158",
        "title": "Stanford Gala 159",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM5m8a01opDq5QyzRvg9jPCHizO_1-xjk-29Bz-DxCZrcIKY4PdxxolJLorbxAmKeerOCu0uO6Hmc62UCwYkhmHww8xafrrIUNzqaL8ntOQJK2Yqwqc=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM5m8a01opDq5QyzRvg9jPCHizO_1-xjk-29Bz-DxCZrcIKY4PdxxolJLorbxAmKeerOCu0uO6Hmc62UCwYkhmHww8xafrrIUNzqaL8ntOQJK2Yqwqc=w600"
      },
      {
        "id": "stanford-159",
        "title": "Stanford Gala 160",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO_pDpN17bCD9bSp8jj5ULfVPbYGxfo4KTDBQr6kJOr9t9FktZBGeoPqTCvZq4gnnV70ya3pVfu4DagiKc5ataT73ipqh9pBNjFT55cZosWeuzodgu2=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO_pDpN17bCD9bSp8jj5ULfVPbYGxfo4KTDBQr6kJOr9t9FktZBGeoPqTCvZq4gnnV70ya3pVfu4DagiKc5ataT73ipqh9pBNjFT55cZosWeuzodgu2=w600"
      },
      {
        "id": "stanford-160",
        "title": "Stanford Gala 161",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMh77T49hj3zqG_K5xed99EYOd29nnyo_uRQQut7ueVM7nOYAQitjhqF8GPEHQ6wU2Vdo5CvUPKiNGpKpZiItT0CktlXwNUi3muSfAHJwOpSuxiKqOd=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMh77T49hj3zqG_K5xed99EYOd29nnyo_uRQQut7ueVM7nOYAQitjhqF8GPEHQ6wU2Vdo5CvUPKiNGpKpZiItT0CktlXwNUi3muSfAHJwOpSuxiKqOd=w600"
      },
      {
        "id": "stanford-161",
        "title": "Stanford Gala 162",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM2WC1zQnnSU3psRH9I5zydKJpxJ8IVlWuSildx4w4j9GPUfqGBMqq5hmgfsZT9EXWVwoqDZ8_UL24UzlHKlT7-EEFm7GQ8m8Hnvg0Ku-5KaLbNbrrY=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM2WC1zQnnSU3psRH9I5zydKJpxJ8IVlWuSildx4w4j9GPUfqGBMqq5hmgfsZT9EXWVwoqDZ8_UL24UzlHKlT7-EEFm7GQ8m8Hnvg0Ku-5KaLbNbrrY=w600"
      },
      {
        "id": "stanford-162",
        "title": "Stanford Gala 163",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczND-oDF_ZSNFmk_Aqxb5pW5grOQpkJ1wxV7w4MX-WranieYDN8QccUVkKii37aDnMnURHOQq5SorXtgkXutZzhkTaUGKzia0OM0_N9vzgBjyP2WXXUI=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczND-oDF_ZSNFmk_Aqxb5pW5grOQpkJ1wxV7w4MX-WranieYDN8QccUVkKii37aDnMnURHOQq5SorXtgkXutZzhkTaUGKzia0OM0_N9vzgBjyP2WXXUI=w600"
      },
      {
        "id": "stanford-163",
        "title": "Stanford Gala 164",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNLfJKPCqmEz15-xLAukKCrW9HGXneoyNVFkaeK2x02gTvku8mcbFDppffTGkObAzyQkaS6Jx9C6aenUesTZL0M1O3K80V58jFiphR8aV-VCSyKMIig=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNLfJKPCqmEz15-xLAukKCrW9HGXneoyNVFkaeK2x02gTvku8mcbFDppffTGkObAzyQkaS6Jx9C6aenUesTZL0M1O3K80V58jFiphR8aV-VCSyKMIig=w600"
      },
      {
        "id": "stanford-164",
        "title": "Stanford Gala 165",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNgBhTrOaqKQTMZjo1UyTkS5iGkmmGx9s3IyPvWwvdxyqd3n59PWrGXE2pY2qbvO3DBezz2oz6qUUeAJJcjpHZ7asOqsT6VKmlbXuFJ7ZLdDMXULNFZ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNgBhTrOaqKQTMZjo1UyTkS5iGkmmGx9s3IyPvWwvdxyqd3n59PWrGXE2pY2qbvO3DBezz2oz6qUUeAJJcjpHZ7asOqsT6VKmlbXuFJ7ZLdDMXULNFZ=w600"
      },
      {
        "id": "stanford-165",
        "title": "Stanford Gala 166",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNamU1Q8c3tlPdtNVvfoa0qlJrW9swoxXwDoeDKZZpJeYiOVXvGZxUTBHiHvUrET14tdcdD-eQpSTL4HXkNle5PUTlYPFd6z0Ug4QeqRarWMF-0MGVQ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNamU1Q8c3tlPdtNVvfoa0qlJrW9swoxXwDoeDKZZpJeYiOVXvGZxUTBHiHvUrET14tdcdD-eQpSTL4HXkNle5PUTlYPFd6z0Ug4QeqRarWMF-0MGVQ=w600"
      },
      {
        "id": "stanford-166",
        "title": "Stanford Gala 167",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPDFmVK0wN1QY_3CiWBipM6IVkMdKRc0MbrXyt0RhuZom3FLC5d8lUxcvp9v2AdkH1TWcTa-htC1552sLMy4uhRQAuqSF7AiqsQMcxFy2oKOT1LIcpg=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPDFmVK0wN1QY_3CiWBipM6IVkMdKRc0MbrXyt0RhuZom3FLC5d8lUxcvp9v2AdkH1TWcTa-htC1552sLMy4uhRQAuqSF7AiqsQMcxFy2oKOT1LIcpg=w600"
      },
      {
        "id": "stanford-167",
        "title": "Stanford Gala 168",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPHXT5sjTO5CJpUNdAoSJlI8W4ba4TP8rpurFwmDCUsu9j9_njZyTag1iGzJcqn-1Z-NIBrOlFZDBjhKFgm6X-qKap4MxbsMCCEHjwgQU2OOqcHATly=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPHXT5sjTO5CJpUNdAoSJlI8W4ba4TP8rpurFwmDCUsu9j9_njZyTag1iGzJcqn-1Z-NIBrOlFZDBjhKFgm6X-qKap4MxbsMCCEHjwgQU2OOqcHATly=w600"
      },
      {
        "id": "stanford-168",
        "title": "Stanford Gala 169",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMJYgsGq-MSS5qLhf7pEpcW8X3TbEiVjB6lut3ACAK84Sou66X8BneXcVUJQW-KA7NZqygDTVWfNGUmdxIKZOQVtB3BjwzO9I3gYyrHyGpHfDKtqTzL=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMJYgsGq-MSS5qLhf7pEpcW8X3TbEiVjB6lut3ACAK84Sou66X8BneXcVUJQW-KA7NZqygDTVWfNGUmdxIKZOQVtB3BjwzO9I3gYyrHyGpHfDKtqTzL=w600"
      },
      {
        "id": "stanford-169",
        "title": "Stanford Gala 170",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPlTiPNQOeV_uZ4aIdwTB8xO6PdW3yToHCmswPLV4Z1IGfdizQkw4zT4oPWf_ClkPkdOCMGmy9cSP5Hxb76uizZbPGAin8VwXTY-Hpf8Txq7ARSyP0U=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPlTiPNQOeV_uZ4aIdwTB8xO6PdW3yToHCmswPLV4Z1IGfdizQkw4zT4oPWf_ClkPkdOCMGmy9cSP5Hxb76uizZbPGAin8VwXTY-Hpf8Txq7ARSyP0U=w600"
      },
      {
        "id": "stanford-170",
        "title": "Stanford Gala 171",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMcNe0EpyPvTRoPQLCJbGVC0S8UvYDMR2jHOsZPgQidDbCB4DnaP5RamDH1Oy-wZrix8tUqtSRI7dTvH41_hupk_Zm62Uxot-kQe0jNMng-PlwGAoaJ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMcNe0EpyPvTRoPQLCJbGVC0S8UvYDMR2jHOsZPgQidDbCB4DnaP5RamDH1Oy-wZrix8tUqtSRI7dTvH41_hupk_Zm62Uxot-kQe0jNMng-PlwGAoaJ=w600"
      },
      {
        "id": "stanford-171",
        "title": "Stanford Gala 172",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOJKpgoOoglq-ch_uHdJ3I6o_jc4R_3ckP8mK4-4_0yr4dXv8x1sbzRZ6fcfCzcNDvXdCJwmAB6iI32dPjBW3YvAwJ1yscTwo6RxYTfJwr_hlq030s3=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOJKpgoOoglq-ch_uHdJ3I6o_jc4R_3ckP8mK4-4_0yr4dXv8x1sbzRZ6fcfCzcNDvXdCJwmAB6iI32dPjBW3YvAwJ1yscTwo6RxYTfJwr_hlq030s3=w600"
      },
      {
        "id": "stanford-172",
        "title": "Stanford Gala 173",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOORWN6clYyvDM5rsM1OA51JNX5CHChu8776SNvCXv46xR8xGaJrd-6VOz-7xDMaEownzDvZqmtMwMaAP51WFSHEAIRfcTHfRy9J2wqLVPcBaKpXlzR=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOORWN6clYyvDM5rsM1OA51JNX5CHChu8776SNvCXv46xR8xGaJrd-6VOz-7xDMaEownzDvZqmtMwMaAP51WFSHEAIRfcTHfRy9J2wqLVPcBaKpXlzR=w600"
      },
      {
        "id": "stanford-173",
        "title": "Stanford Gala 174",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPMSZdcIrssUYrY7Ia5Oo6mdIbm4LpGQicCk4fER6kJCiCPdd2AwB7L9YZVo22e-u4mkpsksPraGAlI_kcq47LHB23zFan4t4RbPrT_kVD3WOMX9crd=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPMSZdcIrssUYrY7Ia5Oo6mdIbm4LpGQicCk4fER6kJCiCPdd2AwB7L9YZVo22e-u4mkpsksPraGAlI_kcq47LHB23zFan4t4RbPrT_kVD3WOMX9crd=w600"
      },
      {
        "id": "stanford-174",
        "title": "Stanford Gala 175",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPDRqAS_NbZfTtLsXb7OT8D0z7sm7l1ljVAFvelcRX8LJh_h2MKEEJ0wVGiEdfH9EyeTtxWY_IE9rt_J0qu0Mo8C3F2JQCjWaJyFgAHc-BkYXP8s1M4=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPDRqAS_NbZfTtLsXb7OT8D0z7sm7l1ljVAFvelcRX8LJh_h2MKEEJ0wVGiEdfH9EyeTtxWY_IE9rt_J0qu0Mo8C3F2JQCjWaJyFgAHc-BkYXP8s1M4=w600"
      },
      {
        "id": "stanford-175",
        "title": "Stanford Gala 176",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMQMAgJdhCGYQQYIazVs7yA-2qG_EcBa15wJAjKZGggyCljkM_vrZNlSEefzN9nC5LF_w6zs-metEkx4MDGhdhGb0nTq8YivV-f_9g9KYnVxX1gJF_4=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMQMAgJdhCGYQQYIazVs7yA-2qG_EcBa15wJAjKZGggyCljkM_vrZNlSEefzN9nC5LF_w6zs-metEkx4MDGhdhGb0nTq8YivV-f_9g9KYnVxX1gJF_4=w600"
      },
      {
        "id": "stanford-176",
        "title": "Stanford Gala 177",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN0mqHzJN5KSMb-p4mAvYAzYIdCsSRrbwVvzeDzxxd3sXsqTkM7HJeTvXAjUUq6hiwkllJkzIdFa7mIYb8SGOuznTjZ049OkUelDFFWoDWw_rTn9yYb=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN0mqHzJN5KSMb-p4mAvYAzYIdCsSRrbwVvzeDzxxd3sXsqTkM7HJeTvXAjUUq6hiwkllJkzIdFa7mIYb8SGOuznTjZ049OkUelDFFWoDWw_rTn9yYb=w600"
      },
      {
        "id": "stanford-177",
        "title": "Stanford Gala 178",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMLHS8X1_YyYDfKJXaLo3JsntoUPHzufoBh1AthY9dtAMOeQsLs8Zc_mm185bE33RbDj26oP_cLdnMaRZ6wlZXq5rYPBuNojCs5_Vr3vGf26vG2AOqC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMLHS8X1_YyYDfKJXaLo3JsntoUPHzufoBh1AthY9dtAMOeQsLs8Zc_mm185bE33RbDj26oP_cLdnMaRZ6wlZXq5rYPBuNojCs5_Vr3vGf26vG2AOqC=w600"
      },
      {
        "id": "stanford-178",
        "title": "Stanford Gala 179",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNHuVH_sGIE9VFSBkQfAZ2wArCcSUPs4-mv-cf-MxRl7zEofPephq3j58PpH31g366wWHQuo_-EV0YUpOy-r9nkC_uv-Y6RdoL2DAp7T0gAhke4Lmqb=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNHuVH_sGIE9VFSBkQfAZ2wArCcSUPs4-mv-cf-MxRl7zEofPephq3j58PpH31g366wWHQuo_-EV0YUpOy-r9nkC_uv-Y6RdoL2DAp7T0gAhke4Lmqb=w600"
      },
      {
        "id": "stanford-179",
        "title": "Stanford Gala 180",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOGqXF3l4u4CeM3B-O_qyA4ZTouACU5r1EQcqQederesw9SF--1CDiwtMR9J99L5dbsUbypm_M7o2ZAe4Jl1zjSC8_8AhI4-0RaXM2-AAeWjuNAaxEK=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOGqXF3l4u4CeM3B-O_qyA4ZTouACU5r1EQcqQederesw9SF--1CDiwtMR9J99L5dbsUbypm_M7o2ZAe4Jl1zjSC8_8AhI4-0RaXM2-AAeWjuNAaxEK=w600"
      },
      {
        "id": "stanford-180",
        "title": "Stanford Gala 181",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNuXnFhKd6cJugQuw9gqX8KvhRjcyA0qMbws36Uf2dvwftbKP2JZnerdWgFu6yKPrnFkvoKxh8Ntppc591CmEsS5i1tNmE-FvKBpd3jT2mv1Pd8CJiI=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNuXnFhKd6cJugQuw9gqX8KvhRjcyA0qMbws36Uf2dvwftbKP2JZnerdWgFu6yKPrnFkvoKxh8Ntppc591CmEsS5i1tNmE-FvKBpd3jT2mv1Pd8CJiI=w600"
      },
      {
        "id": "stanford-181",
        "title": "Stanford Gala 182",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPzBZRbm3Rfz_rje2lNITS8QYIgbV4C8X1g66vtGRN-6arrR48iBmCdG7iCjD17vbUwxzM6R4nKdmllKeL6HFqVbPoG8IenjEzQOKc-AKxFGr8aCwMT=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPzBZRbm3Rfz_rje2lNITS8QYIgbV4C8X1g66vtGRN-6arrR48iBmCdG7iCjD17vbUwxzM6R4nKdmllKeL6HFqVbPoG8IenjEzQOKc-AKxFGr8aCwMT=w600"
      },
      {
        "id": "stanford-182",
        "title": "Stanford Gala 183",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOk3lSf3nxqavadd2Wye32FPWCqCd7Y8nEL0x7MbhvoFUgHqcSgBwSeZay1nqew6vhfWy1i6NBuUKTqq3lOJUlmonAqkMzNVBkJRD3FuDqBbv-sU121=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOk3lSf3nxqavadd2Wye32FPWCqCd7Y8nEL0x7MbhvoFUgHqcSgBwSeZay1nqew6vhfWy1i6NBuUKTqq3lOJUlmonAqkMzNVBkJRD3FuDqBbv-sU121=w600"
      },
      {
        "id": "stanford-183",
        "title": "Stanford Gala 184",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPeMZYQMdYFVTrgD5kFsWTliMlgQIwFu_ZuoCXSSP0yamjdfWD8kwGoc-VF7grNNzV3utFrCOi6iJmXk49wL9tvtLXkwh2WloYOPZvBuQJ5xaksfywT=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPeMZYQMdYFVTrgD5kFsWTliMlgQIwFu_ZuoCXSSP0yamjdfWD8kwGoc-VF7grNNzV3utFrCOi6iJmXk49wL9tvtLXkwh2WloYOPZvBuQJ5xaksfywT=w600"
      },
      {
        "id": "stanford-184",
        "title": "Stanford Gala 185",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP64vJcZ2KIK0VeLYdw3wrdec05kZ6fax3l_1NzasZ9dZHAGre24N3v34WyZHOmQGDLfdeHCrNHU6O7VzK6NVl_wgD9DeOTBWGVJga74QlUzsIi6nbx=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP64vJcZ2KIK0VeLYdw3wrdec05kZ6fax3l_1NzasZ9dZHAGre24N3v34WyZHOmQGDLfdeHCrNHU6O7VzK6NVl_wgD9DeOTBWGVJga74QlUzsIi6nbx=w600"
      },
      {
        "id": "stanford-185",
        "title": "Stanford Gala 186",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNfP7UAdKpxix3ZDi_BgNFz66kzibv33aueBcQ49Wa9fFTIwBXu9YLsW0TjcZ_o7tkfO3dVabhd7B-wmFSAbTT7qb2F7Ot_Za4xwMkoS2LJ723EQ7yG=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNfP7UAdKpxix3ZDi_BgNFz66kzibv33aueBcQ49Wa9fFTIwBXu9YLsW0TjcZ_o7tkfO3dVabhd7B-wmFSAbTT7qb2F7Ot_Za4xwMkoS2LJ723EQ7yG=w600"
      },
      {
        "id": "stanford-186",
        "title": "Stanford Gala 187",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMTUsBiz1TgJNkpmgVJYY-2yYGiVkY6LeBSJT-wXBy_-jWxmAmVhjtmnqEBQNka_RhmwtwVNtz1YMuFGhhRodz_zJtuqJbP3GMrRRtk3JQF4cbdcgnB=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMTUsBiz1TgJNkpmgVJYY-2yYGiVkY6LeBSJT-wXBy_-jWxmAmVhjtmnqEBQNka_RhmwtwVNtz1YMuFGhhRodz_zJtuqJbP3GMrRRtk3JQF4cbdcgnB=w600"
      },
      {
        "id": "stanford-187",
        "title": "Stanford Gala 188",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOWucnWROW1R3v_73Z5mdQuCsKkXGB-LvWBUCbkLPPGoGHX9uvKq9bkTPfcCIEi3WL9dDaD40H06gRwQKS0BH6y5sH7sdVYsYlE6VHFKvZ_6Fz6bR6G=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOWucnWROW1R3v_73Z5mdQuCsKkXGB-LvWBUCbkLPPGoGHX9uvKq9bkTPfcCIEi3WL9dDaD40H06gRwQKS0BH6y5sH7sdVYsYlE6VHFKvZ_6Fz6bR6G=w600"
      },
      {
        "id": "stanford-188",
        "title": "Stanford Gala 189",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNX9Nv7pJnbgyQOx57fLfn1itSWqfZid4IE3KcMCK3ICdjalKFODV7wR7HYsCvvHi_B9oZq2J2t6yB_HGJOuM7IjtS3jS0hb4i1dBXu-v1iqRX2zLmx=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNX9Nv7pJnbgyQOx57fLfn1itSWqfZid4IE3KcMCK3ICdjalKFODV7wR7HYsCvvHi_B9oZq2J2t6yB_HGJOuM7IjtS3jS0hb4i1dBXu-v1iqRX2zLmx=w600"
      },
      {
        "id": "stanford-189",
        "title": "Stanford Gala 190",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPE33OzFBcTHQwXSYLzI5LBT3gpO93XA1HXUnv5mOp8jiJO-kN2_x2pRqrFYbPFiGEFgfj2wPZmq8jFkt0VriK3Ka9443ACQswfS4bTMtBt6GMtN7ff=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPE33OzFBcTHQwXSYLzI5LBT3gpO93XA1HXUnv5mOp8jiJO-kN2_x2pRqrFYbPFiGEFgfj2wPZmq8jFkt0VriK3Ka9443ACQswfS4bTMtBt6GMtN7ff=w600"
      },
      {
        "id": "stanford-190",
        "title": "Stanford Gala 191",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMCn9qmk0nTcDPoQLGOzL4SFac0R3cHBbZ2jhUgeRGQGY0hnplBKI7-4A29DeO5OJpR4IigEF-kJQXhQ_J0t5oZEZBy4kbaL1GE9nIqGhsXCiJX_T8D=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMCn9qmk0nTcDPoQLGOzL4SFac0R3cHBbZ2jhUgeRGQGY0hnplBKI7-4A29DeO5OJpR4IigEF-kJQXhQ_J0t5oZEZBy4kbaL1GE9nIqGhsXCiJX_T8D=w600"
      },
      {
        "id": "stanford-191",
        "title": "Stanford Gala 192",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP7vKvWOKZ926RH7fkAYfzRbhwNGohh-bILHnqj-QgsT1dJexdipw49PBWUlx4Gpj6R0Qgkpx7PnELl-FTMCxJrYeqVXGlgaQ8agK4Q56n-0fgZ5gSO=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP7vKvWOKZ926RH7fkAYfzRbhwNGohh-bILHnqj-QgsT1dJexdipw49PBWUlx4Gpj6R0Qgkpx7PnELl-FTMCxJrYeqVXGlgaQ8agK4Q56n-0fgZ5gSO=w600"
      },
      {
        "id": "stanford-192",
        "title": "Stanford Gala 193",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOmSYZkPAbi3bLHasjsJP2QovdtRIWZ1l_F-pWqFUD-Jw6ENfkgvmhBSUpsIIgG75CRG7lRpLrhOnJ2zoLffgz3tD-Z2PRUu4WBCiaYhZYn4mGUmCFj=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOmSYZkPAbi3bLHasjsJP2QovdtRIWZ1l_F-pWqFUD-Jw6ENfkgvmhBSUpsIIgG75CRG7lRpLrhOnJ2zoLffgz3tD-Z2PRUu4WBCiaYhZYn4mGUmCFj=w600"
      },
      {
        "id": "stanford-193",
        "title": "Stanford Gala 194",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP9SvnHof5awkQRlAVwaVi8I_4mcN6CbKKfaZgwdRp3AWxDnDhabU38OjsAiOyp5nXalxZAuNNPfaxW_Oo6DV-bf6pxVtwyL7rQySCr05rSScK6gOfN=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP9SvnHof5awkQRlAVwaVi8I_4mcN6CbKKfaZgwdRp3AWxDnDhabU38OjsAiOyp5nXalxZAuNNPfaxW_Oo6DV-bf6pxVtwyL7rQySCr05rSScK6gOfN=w600"
      },
      {
        "id": "stanford-194",
        "title": "Stanford Gala 195",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOYV6xjaX8L7DYLDKImwG5iUckRAIXhbYJyO7LpnOk6OOuQA3pkithBBz6ikPPjESRtydq8pcV21D2wR159tx9QgNepUfBmfELv9nKYNb2axNvXhslg=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOYV6xjaX8L7DYLDKImwG5iUckRAIXhbYJyO7LpnOk6OOuQA3pkithBBz6ikPPjESRtydq8pcV21D2wR159tx9QgNepUfBmfELv9nKYNb2axNvXhslg=w600"
      },
      {
        "id": "stanford-195",
        "title": "Stanford Gala 196",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNKumqDGPMyLYYqyIkYbcYrHOFXh8U3q2I5L5IdN22T_giQ3odjHChOAiCMvETZW5kRi-1garn_eW3GDw6vYJLk8rOSF6TX3TwrdIlL3UVQz42pGQKS=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNKumqDGPMyLYYqyIkYbcYrHOFXh8U3q2I5L5IdN22T_giQ3odjHChOAiCMvETZW5kRi-1garn_eW3GDw6vYJLk8rOSF6TX3TwrdIlL3UVQz42pGQKS=w600"
      },
      {
        "id": "stanford-196",
        "title": "Stanford Gala 197",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMc_Ts-nJtwSswEbYgcFBcDOICa8_iadGEEZ_p3ZfMTLUbmlvWU9tX9XEi1vlO4w4gPRYpZlZiKAHFGm9ujY_nL41sWAbsGoeiPEQch-fhNw2C80-20=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMc_Ts-nJtwSswEbYgcFBcDOICa8_iadGEEZ_p3ZfMTLUbmlvWU9tX9XEi1vlO4w4gPRYpZlZiKAHFGm9ujY_nL41sWAbsGoeiPEQch-fhNw2C80-20=w600"
      },
      {
        "id": "stanford-197",
        "title": "Stanford Gala 198",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN2smN2OkvsXgZNIm5BNOFfsfv0zhxZG1bhasT6RJoW9PnrCxoJniM0LLobhDUQuRNKqS8FnW7kF4pHYYri3I1d0dCgeBrZ905L1iGFja4phJ02Niu0=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN2smN2OkvsXgZNIm5BNOFfsfv0zhxZG1bhasT6RJoW9PnrCxoJniM0LLobhDUQuRNKqS8FnW7kF4pHYYri3I1d0dCgeBrZ905L1iGFja4phJ02Niu0=w600"
      },
      {
        "id": "stanford-198",
        "title": "Stanford Gala 199",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPXHASBke36yt5WuXwC2sDuuwYVYdFbwkV7NBkAe92Svvr2VboQh5LTNIlQkqQrh8_dzBB8fnQTqrT2bTYp5yPlKf9In0q-FeqSXKs50SUFuGpkETkz=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPXHASBke36yt5WuXwC2sDuuwYVYdFbwkV7NBkAe92Svvr2VboQh5LTNIlQkqQrh8_dzBB8fnQTqrT2bTYp5yPlKf9In0q-FeqSXKs50SUFuGpkETkz=w600"
      },
      {
        "id": "stanford-199",
        "title": "Stanford Gala 200",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPH5BvFz4biIJuroMHzwdaMnVlHULA78F5fDb6rCn_hEt8GqsxUVdM6lN6OMxty82kKXfq5Lh88WGxeembwIJ7LWpsdRfuxPJotSwHew34e3HDITyul=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPH5BvFz4biIJuroMHzwdaMnVlHULA78F5fDb6rCn_hEt8GqsxUVdM6lN6OMxty82kKXfq5Lh88WGxeembwIJ7LWpsdRfuxPJotSwHew34e3HDITyul=w600"
      },
      {
        "id": "stanford-200",
        "title": "Stanford Gala 201",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMFh8AUBII1ACV2izWRnMB2bKvQq9Wl4qkJmKm7Awmq08RF2ciQ2VdK4xXbiQu041eZ7ju90updUoZC4t0biN7L6A8NQgGUet_CaeML5T0Vt0Pn1jmQ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMFh8AUBII1ACV2izWRnMB2bKvQq9Wl4qkJmKm7Awmq08RF2ciQ2VdK4xXbiQu041eZ7ju90updUoZC4t0biN7L6A8NQgGUet_CaeML5T0Vt0Pn1jmQ=w600"
      },
      {
        "id": "stanford-201",
        "title": "Stanford Gala 202",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMDR5HSx4hXbt6y8dFA-_q0gYhn9GEKGuCDhLKUXsWEk0R4Va0JMAeiIOqChJB7HbTRoUwnWVt0mf0FRYlz8L1pUIFAyg95G3RmjlbvA1zXmlVY0_fF=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMDR5HSx4hXbt6y8dFA-_q0gYhn9GEKGuCDhLKUXsWEk0R4Va0JMAeiIOqChJB7HbTRoUwnWVt0mf0FRYlz8L1pUIFAyg95G3RmjlbvA1zXmlVY0_fF=w600"
      },
      {
        "id": "stanford-202",
        "title": "Stanford Gala 203",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb4lBZSQTiKrfHK99XvR9Fl05xZsH_0S9dd1BKBqfJ7CWkJkGZ_HNzE1w-j5fzDLfXLdJ00f_U0b0zt46-5nKlAFPM7qXJ78Ni6pdRpWQCuWuBjahS=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb4lBZSQTiKrfHK99XvR9Fl05xZsH_0S9dd1BKBqfJ7CWkJkGZ_HNzE1w-j5fzDLfXLdJ00f_U0b0zt46-5nKlAFPM7qXJ78Ni6pdRpWQCuWuBjahS=w600"
      },
      {
        "id": "stanford-203",
        "title": "Stanford Gala 204",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPP3IwgdOIK4d1DsyaygDOPJfqV4wwudRYviGMoBSbmFFrEfVKQJyIFtp66i0B0XGaNEy3lX14TnQM5Z2DOwKsax3hEc4xNccpU9RnAxuqAx4Kvb8Wr=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPP3IwgdOIK4d1DsyaygDOPJfqV4wwudRYviGMoBSbmFFrEfVKQJyIFtp66i0B0XGaNEy3lX14TnQM5Z2DOwKsax3hEc4xNccpU9RnAxuqAx4Kvb8Wr=w600"
      },
      {
        "id": "stanford-204",
        "title": "Stanford Gala 205",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPJs98R9zPBHDMZZso0wr7Tm2xJZrztUmHL1cwO8GOsHKPmvFN22uIdXvPtogUPRMtVudC57s70qSfm8GUnyDwJ35I-WJZLkSPqNIbRnR_VB6wcx3p7=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPJs98R9zPBHDMZZso0wr7Tm2xJZrztUmHL1cwO8GOsHKPmvFN22uIdXvPtogUPRMtVudC57s70qSfm8GUnyDwJ35I-WJZLkSPqNIbRnR_VB6wcx3p7=w600"
      },
      {
        "id": "stanford-205",
        "title": "Stanford Gala 206",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO9Z_h1IIWsXosZxTSE59L1NwIeAhuX5W-pnpsPeKXgPXETNgg5_K6lDjD9DTWATFNWoGLci8nN1s03XqcFIjFUpeNiC1DXlcucPACx-Ytth3y0bNX9=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO9Z_h1IIWsXosZxTSE59L1NwIeAhuX5W-pnpsPeKXgPXETNgg5_K6lDjD9DTWATFNWoGLci8nN1s03XqcFIjFUpeNiC1DXlcucPACx-Ytth3y0bNX9=w600"
      },
      {
        "id": "stanford-206",
        "title": "Stanford Gala 207",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMjoDhm9-JIIS-siqNR3-s56r-EQ0-q7IR2chuUyzrpq-L7P2TsiSwl1oARyOuhUmdZ1ONoLxn3bCe2FTh1PgW4a_XbJGPLQCknR1Wy7YO6g0Pr2M9A=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMjoDhm9-JIIS-siqNR3-s56r-EQ0-q7IR2chuUyzrpq-L7P2TsiSwl1oARyOuhUmdZ1ONoLxn3bCe2FTh1PgW4a_XbJGPLQCknR1Wy7YO6g0Pr2M9A=w600"
      },
      {
        "id": "stanford-207",
        "title": "Stanford Gala 208",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNiYi3-ABPDe8iQZfzjndDoyoQZzjD4gQMuoUUgS-msoLpoViv-jVVFxdFoY0Bhku33QGahiUS35zgXSOolyDEVGJoKAAhpAIqGgiDHRMaULwTqct0T=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNiYi3-ABPDe8iQZfzjndDoyoQZzjD4gQMuoUUgS-msoLpoViv-jVVFxdFoY0Bhku33QGahiUS35zgXSOolyDEVGJoKAAhpAIqGgiDHRMaULwTqct0T=w600"
      },
      {
        "id": "stanford-208",
        "title": "Stanford Gala 209",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMg908VmDNAq7MY4pGWxxqIwoNEYdGJfctBjeS9za9ufycvhWMzMS7WfZkQPfGXCcNX94LKWpJkfRFLKXWhP6sJpWWlM2pKZDDXSZqnNdAvVfC9rglg=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMg908VmDNAq7MY4pGWxxqIwoNEYdGJfctBjeS9za9ufycvhWMzMS7WfZkQPfGXCcNX94LKWpJkfRFLKXWhP6sJpWWlM2pKZDDXSZqnNdAvVfC9rglg=w600"
      },
      {
        "id": "stanford-209",
        "title": "Stanford Gala 210",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb9rHGG_hx0_jAFzsvxyYfHhT_CzHs99yRva_vJrWanofMjFR18lg9RxwSLE4WicowpWTNxbFgiZKhLNvwUuljiySPnI1Sq9SY1UUY0Cb7nlUsoNk4=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPb9rHGG_hx0_jAFzsvxyYfHhT_CzHs99yRva_vJrWanofMjFR18lg9RxwSLE4WicowpWTNxbFgiZKhLNvwUuljiySPnI1Sq9SY1UUY0Cb7nlUsoNk4=w600"
      },
      {
        "id": "stanford-210",
        "title": "Stanford Gala 211",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPsjzQyStLkzbyziwfT9BsyFn-1KOhW55t3XnMNDq5DV9jZeLJPa5wN5YtCI29pExwptTQ0U03ec0jSaGpeBZLjLV3BiYHo4lEVY0rMCdGRjliC4OHF=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPsjzQyStLkzbyziwfT9BsyFn-1KOhW55t3XnMNDq5DV9jZeLJPa5wN5YtCI29pExwptTQ0U03ec0jSaGpeBZLjLV3BiYHo4lEVY0rMCdGRjliC4OHF=w600"
      },
      {
        "id": "stanford-211",
        "title": "Stanford Gala 212",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO2gp3rKU0-U9uP8SS4FSa_TIizvayLQiZgJArcrEx4hV8hfFUHuZ054gMsOVLjEGK_8AAUTOJbatY8iaasfiYzCV0mRFTk7Dhr2WLZLGRLKA4_7GhH=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO2gp3rKU0-U9uP8SS4FSa_TIizvayLQiZgJArcrEx4hV8hfFUHuZ054gMsOVLjEGK_8AAUTOJbatY8iaasfiYzCV0mRFTk7Dhr2WLZLGRLKA4_7GhH=w600"
      },
      {
        "id": "stanford-212",
        "title": "Stanford Gala 213",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM5uoews_XuF642st4TCSVcm3VUvLCAHjxVnjQOhrNv4q_5BINwIIYNIqpxEvzTl5LoBjZAj28V6CPciwfWRdvGUXTak7pWHXKp3IEdtzeJZSSiqmM2=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM5uoews_XuF642st4TCSVcm3VUvLCAHjxVnjQOhrNv4q_5BINwIIYNIqpxEvzTl5LoBjZAj28V6CPciwfWRdvGUXTak7pWHXKp3IEdtzeJZSSiqmM2=w600"
      },
      {
        "id": "stanford-213",
        "title": "Stanford Gala 214",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN0HiSIRawhsPaMPpwqaepkEuO71WlcAlqmk2eG2XcssNvVUqBg8B7AAwzsnPTxyVcHMCLWXIZZeyDAZyMr5sGJUWY_Zlx1MHkZ-K6AcId3FDw2NRQC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN0HiSIRawhsPaMPpwqaepkEuO71WlcAlqmk2eG2XcssNvVUqBg8B7AAwzsnPTxyVcHMCLWXIZZeyDAZyMr5sGJUWY_Zlx1MHkZ-K6AcId3FDw2NRQC=w600"
      },
      {
        "id": "stanford-214",
        "title": "Stanford Gala 215",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN_rejESfroVVv0xfX9gm2f9_TRfjQW1waPRSa-XrHhAh3SY7Qw-qAZcz4GvDGBiEuYHVb5tsUOarVDMJduL5-IqCgPwmuOm501BAD2s0gGb9Y8FAme=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN_rejESfroVVv0xfX9gm2f9_TRfjQW1waPRSa-XrHhAh3SY7Qw-qAZcz4GvDGBiEuYHVb5tsUOarVDMJduL5-IqCgPwmuOm501BAD2s0gGb9Y8FAme=w600"
      },
      {
        "id": "stanford-215",
        "title": "Stanford Gala 216",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOMVlJ8TS6XyVyjSajwVIrlw_go0PGG3uR2O_4_KW9K30xscEI5paHyrLg6VnvVpQRxkPObSOFbDUks7ZRA_nHM24R_fFu_Ohkvj_8NJgRaehkGJLJT=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOMVlJ8TS6XyVyjSajwVIrlw_go0PGG3uR2O_4_KW9K30xscEI5paHyrLg6VnvVpQRxkPObSOFbDUks7ZRA_nHM24R_fFu_Ohkvj_8NJgRaehkGJLJT=w600"
      },
      {
        "id": "stanford-216",
        "title": "Stanford Gala 217",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP8ehZBYwfhu1QUC9MIbAbc-DaDEIryCwTiOQWb0G-VczlpGWBYYhOmGO74dDkpMjEn65ow0uZqZvRVSKIr4qPgGHfYvHgErI01ejY0BCcjMTaIe3fM=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP8ehZBYwfhu1QUC9MIbAbc-DaDEIryCwTiOQWb0G-VczlpGWBYYhOmGO74dDkpMjEn65ow0uZqZvRVSKIr4qPgGHfYvHgErI01ejY0BCcjMTaIe3fM=w600"
      },
      {
        "id": "stanford-217",
        "title": "Stanford Gala 218",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNaR-BEXS9WP0bTT6xYk31XFAZDw_T55juS820e9k8rsbFzlvyhJkvcel75C0ZVzMvayjTYHGTSzVYCH4X8hoiJv7lE1kYFisvJH6K-eKBzpfgnyixf=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNaR-BEXS9WP0bTT6xYk31XFAZDw_T55juS820e9k8rsbFzlvyhJkvcel75C0ZVzMvayjTYHGTSzVYCH4X8hoiJv7lE1kYFisvJH6K-eKBzpfgnyixf=w600"
      },
      {
        "id": "stanford-218",
        "title": "Stanford Gala 219",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMaNNFsnJvuGJ2UtvMfPtz3vfbkXec0TtkJLVJH1UKHEBz2qzLpiNYEmogtw9TKOAWXFPhFzR3xNifCvNrTr8_-fJrtw-jUdJhzcz4g8KkAbhKEzBeH=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMaNNFsnJvuGJ2UtvMfPtz3vfbkXec0TtkJLVJH1UKHEBz2qzLpiNYEmogtw9TKOAWXFPhFzR3xNifCvNrTr8_-fJrtw-jUdJhzcz4g8KkAbhKEzBeH=w600"
      },
      {
        "id": "stanford-219",
        "title": "Stanford Gala 220",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPZyvxuxhmXgHcOx6IwAeAWUDIUKJRZMC3ugzXzaSQQ5ejYncR9mTQvNGIDNaWaL7C5kUY8o9g6vfc2dxfVsNbLgxbq5EDNfemDUZsCSw6hmp-yw6AB=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPZyvxuxhmXgHcOx6IwAeAWUDIUKJRZMC3ugzXzaSQQ5ejYncR9mTQvNGIDNaWaL7C5kUY8o9g6vfc2dxfVsNbLgxbq5EDNfemDUZsCSw6hmp-yw6AB=w600"
      },
      {
        "id": "stanford-220",
        "title": "Stanford Gala 221",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNMRI5JaCqq_tnGJcEUW9zF68pJ6POh2Av2dQAH4u498NwnA83ZhVfiyVxPHAY0FYkv8KgJxY2udnPgYkXSvXgsMb_7KZFQQB3_80CYB2h-cLtuJL9x=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNMRI5JaCqq_tnGJcEUW9zF68pJ6POh2Av2dQAH4u498NwnA83ZhVfiyVxPHAY0FYkv8KgJxY2udnPgYkXSvXgsMb_7KZFQQB3_80CYB2h-cLtuJL9x=w600"
      },
      {
        "id": "stanford-221",
        "title": "Stanford Gala 222",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMWnT5hYm4Z4wwspo1p8gnNYajQMTpjrw40lAY7yiWBtCwbL8jB-3So-pIuEkKIdn60cvO5HtmgANoMUcV-H5MgpNeRu0OMoYXGg1gqQG2zXeKiS2bR=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMWnT5hYm4Z4wwspo1p8gnNYajQMTpjrw40lAY7yiWBtCwbL8jB-3So-pIuEkKIdn60cvO5HtmgANoMUcV-H5MgpNeRu0OMoYXGg1gqQG2zXeKiS2bR=w600"
      },
      {
        "id": "stanford-222",
        "title": "Stanford Gala 223",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNYkeimZZrJFvJJ22S_F43CSyIJqWaKOW0rs3l7yfwS3S9jfSgdsb6ingIwjfL11mNgdFQFftmmtV0gZd9wrxrcKtYrk12d5hohLufqkqjx4n9O8zis=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNYkeimZZrJFvJJ22S_F43CSyIJqWaKOW0rs3l7yfwS3S9jfSgdsb6ingIwjfL11mNgdFQFftmmtV0gZd9wrxrcKtYrk12d5hohLufqkqjx4n9O8zis=w600"
      },
      {
        "id": "stanford-223",
        "title": "Stanford Gala 224",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM_MXzmFkO5HVkxGeWi-_v7jT6Yjj5BZKeLf6-eTOlGMGpTk3_AlbRJQdY9Fw1msNaYIsWrrXPCvAcuCmxZLDbZ7su34M6JgDTctJkPIql7cGlaM2CW=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM_MXzmFkO5HVkxGeWi-_v7jT6Yjj5BZKeLf6-eTOlGMGpTk3_AlbRJQdY9Fw1msNaYIsWrrXPCvAcuCmxZLDbZ7su34M6JgDTctJkPIql7cGlaM2CW=w600"
      },
      {
        "id": "stanford-224",
        "title": "Stanford Gala 225",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNjsg2Jl-uU5n0_vfXGTX0DDAh9Hen9c3RLkVXOyM3gsQyxv2JFvR8jepCuhmt2pcKszDFOm233uU1LWElWYuIkyGqO78NdvfnrDbb48i0x-MX9rE2N=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNjsg2Jl-uU5n0_vfXGTX0DDAh9Hen9c3RLkVXOyM3gsQyxv2JFvR8jepCuhmt2pcKszDFOm233uU1LWElWYuIkyGqO78NdvfnrDbb48i0x-MX9rE2N=w600"
      },
      {
        "id": "stanford-225",
        "title": "Stanford Gala 226",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOgKyXpRvI3aPitLy9bb1igr9p7xc-1Zd2ovSr_jcOcPCV-Hvv-NIJy6sUBGvhPChY-t9AUD7UrCVKQmnMvoxxuE1fzz84dtjPrhwTWg_TBJcKANSIy=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOgKyXpRvI3aPitLy9bb1igr9p7xc-1Zd2ovSr_jcOcPCV-Hvv-NIJy6sUBGvhPChY-t9AUD7UrCVKQmnMvoxxuE1fzz84dtjPrhwTWg_TBJcKANSIy=w600"
      },
      {
        "id": "stanford-226",
        "title": "Stanford Gala 227",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMUJHAHd_QEgy2hxhXhUtZFOg3JhPphNmYo2mmYdSjf2uyIvReeq-neRhG-n8K7MNduBLxW3yEVdZIrIdnLS1GK3dLTEiGNB6GOLwQPsp96mcR2LCYS=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMUJHAHd_QEgy2hxhXhUtZFOg3JhPphNmYo2mmYdSjf2uyIvReeq-neRhG-n8K7MNduBLxW3yEVdZIrIdnLS1GK3dLTEiGNB6GOLwQPsp96mcR2LCYS=w600"
      },
      {
        "id": "stanford-227",
        "title": "Stanford Gala 228",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP6GAqAKu_0GeuvBZd09n_Z2ZwJ9Pig6pTeo8Bfg6XiDaK9qRjmSVH2eKVJHQnEenTjU1nIgZzv7pc2QWFNOXuSgB07WoER-jJOj-iJDaCiH1EAOksk=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP6GAqAKu_0GeuvBZd09n_Z2ZwJ9Pig6pTeo8Bfg6XiDaK9qRjmSVH2eKVJHQnEenTjU1nIgZzv7pc2QWFNOXuSgB07WoER-jJOj-iJDaCiH1EAOksk=w600"
      },
      {
        "id": "stanford-228",
        "title": "Stanford Gala 229",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMbSUpWmN_jw4iecdxzjnw98CbDWXwxhanVGbGuZ1jdE93GXBrs4-Uh5l9NsfQO8aZEYyb7ty5oU4dW52r3TMgCUsSLs7U4Xj1LKKxGA5sRbANAiw5Z=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMbSUpWmN_jw4iecdxzjnw98CbDWXwxhanVGbGuZ1jdE93GXBrs4-Uh5l9NsfQO8aZEYyb7ty5oU4dW52r3TMgCUsSLs7U4Xj1LKKxGA5sRbANAiw5Z=w600"
      },
      {
        "id": "stanford-229",
        "title": "Stanford Gala 230",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMbVtsgGr6GZV3bYLHOrdbklEgFaFEzm4bS64OzW3L-g2mMmyK9dHPZFkxEuoZtmeZ3pZqyZ3wfWjllLg2fxKth-G4HfZD9vPr5qbIL0zLp4PyeJuAo=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMbVtsgGr6GZV3bYLHOrdbklEgFaFEzm4bS64OzW3L-g2mMmyK9dHPZFkxEuoZtmeZ3pZqyZ3wfWjllLg2fxKth-G4HfZD9vPr5qbIL0zLp4PyeJuAo=w600"
      },
      {
        "id": "stanford-230",
        "title": "Stanford Gala 231",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOr81BIVliHfSoGhVDFq9sZKT1KFAl7uMn8dR8SJXSBJZqbW42OmVxubteJfkjNk3fJLkLcnMHUrLjKn_UWmKX-31pndZS5vrj_BIjIqfrkd3RzwFJc=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOr81BIVliHfSoGhVDFq9sZKT1KFAl7uMn8dR8SJXSBJZqbW42OmVxubteJfkjNk3fJLkLcnMHUrLjKn_UWmKX-31pndZS5vrj_BIjIqfrkd3RzwFJc=w600"
      },
      {
        "id": "stanford-231",
        "title": "Stanford Gala 232",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM1rkbmDLtuNg4BG84Lee-xEyNF0hi700q5RFl08d9r4R9w-46TyjIPoLBPOxius6_X2JEY-IPAzpPr32N6YsY9pugIeEVu_1XpQrqh8EHhTXnAst9P=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM1rkbmDLtuNg4BG84Lee-xEyNF0hi700q5RFl08d9r4R9w-46TyjIPoLBPOxius6_X2JEY-IPAzpPr32N6YsY9pugIeEVu_1XpQrqh8EHhTXnAst9P=w600"
      },
      {
        "id": "stanford-232",
        "title": "Stanford Gala 233",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNlYZyMwFnkRTGO6na-shpQRx7e3nEmc5x5Q4dcqfDkobI3j8A7zDGfswz39upsAr4Lg4mQHu4ePDCG8QP1i13g4k34RrXmQNc9QMax2BntnmAQi_h8=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNlYZyMwFnkRTGO6na-shpQRx7e3nEmc5x5Q4dcqfDkobI3j8A7zDGfswz39upsAr4Lg4mQHu4ePDCG8QP1i13g4k34RrXmQNc9QMax2BntnmAQi_h8=w600"
      },
      {
        "id": "stanford-233",
        "title": "Stanford Gala 234",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMkj8uCSI6cAgGw3VsiT-kkAr9Q2394vNhAvETsW-jMx7z7AzaVHXvGi2sTB68_XZzoQnaLG9W7OWbqxj0OyYGb5MsgMh4vTE31SW78Z3yEgEhgkC59=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMkj8uCSI6cAgGw3VsiT-kkAr9Q2394vNhAvETsW-jMx7z7AzaVHXvGi2sTB68_XZzoQnaLG9W7OWbqxj0OyYGb5MsgMh4vTE31SW78Z3yEgEhgkC59=w600"
      },
      {
        "id": "stanford-234",
        "title": "Stanford Gala 235",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOfEyrJ2LTy4oQ6SGBel8unFnGg892NmZGqO4XXjbutADLGkr6EY6G5UQE6Nlcngk_hEcEb7-u-zB95Mh2lqQ4pD2KStdOTRJiytsWYAT6S6LKGC4Xq=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOfEyrJ2LTy4oQ6SGBel8unFnGg892NmZGqO4XXjbutADLGkr6EY6G5UQE6Nlcngk_hEcEb7-u-zB95Mh2lqQ4pD2KStdOTRJiytsWYAT6S6LKGC4Xq=w600"
      },
      {
        "id": "stanford-235",
        "title": "Stanford Gala 236",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOtrg-zIyEkeo8Wz8vXCaLeLMxvXahdsvJ6xgsexg55_HJ3E3dvWsnR-QhpYdAFGvWqtPK8uaV_dIXwyk963w6ZLraLNkLcN56qx4phpKhMQrsPFwM6=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOtrg-zIyEkeo8Wz8vXCaLeLMxvXahdsvJ6xgsexg55_HJ3E3dvWsnR-QhpYdAFGvWqtPK8uaV_dIXwyk963w6ZLraLNkLcN56qx4phpKhMQrsPFwM6=w600"
      },
      {
        "id": "stanford-236",
        "title": "Stanford Gala 237",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPnBQb16bnuJq1-P6DIrks0aAUkFUBi6EroYvU63rlMcKcx-v_ZboXgCTOKQldGrcOV88UjxAKtHvQYsE2SmxzfH8vVoaP-5NQNNAzoGwctEEveKeS3=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPnBQb16bnuJq1-P6DIrks0aAUkFUBi6EroYvU63rlMcKcx-v_ZboXgCTOKQldGrcOV88UjxAKtHvQYsE2SmxzfH8vVoaP-5NQNNAzoGwctEEveKeS3=w600"
      },
      {
        "id": "stanford-237",
        "title": "Stanford Gala 238",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOzqS1LXmjJ69kh6C7OyOPGVOKgcBIyTkyuq_cI9iPVKyOAYpEr47jz67sEx4nyr9yiWT4n8vKMOhGpC67ewu6dlF6zfsAGELXVhJ-qkEel6_uqLWWt=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOzqS1LXmjJ69kh6C7OyOPGVOKgcBIyTkyuq_cI9iPVKyOAYpEr47jz67sEx4nyr9yiWT4n8vKMOhGpC67ewu6dlF6zfsAGELXVhJ-qkEel6_uqLWWt=w600"
      },
      {
        "id": "stanford-238",
        "title": "Stanford Gala 239",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNc_A-oNbPWL-gg5yPcTvogB1N6IQ40VwGXIBoqSbWwrnw8lG4gEybHG3KOfPmePdS4d5pfnmWPuT9rTuFcEH_tGiZOlHElmyH8A8cqote-33d8WZrC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNc_A-oNbPWL-gg5yPcTvogB1N6IQ40VwGXIBoqSbWwrnw8lG4gEybHG3KOfPmePdS4d5pfnmWPuT9rTuFcEH_tGiZOlHElmyH8A8cqote-33d8WZrC=w600"
      },
      {
        "id": "stanford-239",
        "title": "Stanford Gala 240",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN9RbqNDp9_PcLPJ-DvVc9DRG2RoP4CJjW9zbl3D2a2W9AfgQqnR5OmZaOwJARqvFIzkmBPEKFMbsWfQRnG4RK_Tq-M5QCm1uU-p_AEnNpWVChSS7S-=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN9RbqNDp9_PcLPJ-DvVc9DRG2RoP4CJjW9zbl3D2a2W9AfgQqnR5OmZaOwJARqvFIzkmBPEKFMbsWfQRnG4RK_Tq-M5QCm1uU-p_AEnNpWVChSS7S-=w600"
      },
      {
        "id": "stanford-240",
        "title": "Stanford Gala 241",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNG1zmKTiiImUZw1jfqrWOEvDjyKtv4HaOO4R2uVrpF-eXXqacJSH3F9S8Wugu8DPjuMG75bEFCC4U45wYOCwjBh1CdOhjQXe5mKdh3B4X7M61rk2PK=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNG1zmKTiiImUZw1jfqrWOEvDjyKtv4HaOO4R2uVrpF-eXXqacJSH3F9S8Wugu8DPjuMG75bEFCC4U45wYOCwjBh1CdOhjQXe5mKdh3B4X7M61rk2PK=w600"
      },
      {
        "id": "stanford-241",
        "title": "Stanford Gala 242",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNgge-V7vlk9JDl7VvXH6MTWPinC3ELxTg5phqw_nfXuBOvji_oJ-hGrXtv4JlRdnyDwCbiN0flcxXTzSlOVjhkTg0xBena27c_1kFiNteDAehU5iZx=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNgge-V7vlk9JDl7VvXH6MTWPinC3ELxTg5phqw_nfXuBOvji_oJ-hGrXtv4JlRdnyDwCbiN0flcxXTzSlOVjhkTg0xBena27c_1kFiNteDAehU5iZx=w600"
      },
      {
        "id": "stanford-242",
        "title": "Stanford Gala 243",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOkKQaSMLmrOCfysaD55ATV5vtSZdPv-3DTqtikT5BeY2iCzYScszsbqnlg4w6n8YaIrHrgYrDhzCAj7XvXrCYRReXonH4Jjox4cLaC2C_hmaIjhQUx=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOkKQaSMLmrOCfysaD55ATV5vtSZdPv-3DTqtikT5BeY2iCzYScszsbqnlg4w6n8YaIrHrgYrDhzCAj7XvXrCYRReXonH4Jjox4cLaC2C_hmaIjhQUx=w600"
      },
      {
        "id": "stanford-243",
        "title": "Stanford Gala 244",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPOXamrrkzHfYK2JxuzHE9w9EwqJRU7lW2lCclHdEq4Y733kGtkW_NzfZbuuBHvfHRQ9lX0f0UmHhxft7E9VJNHUAuf4YJ1_g7JjR4gwVozvz4gTE4F=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPOXamrrkzHfYK2JxuzHE9w9EwqJRU7lW2lCclHdEq4Y733kGtkW_NzfZbuuBHvfHRQ9lX0f0UmHhxft7E9VJNHUAuf4YJ1_g7JjR4gwVozvz4gTE4F=w600"
      },
      {
        "id": "stanford-244",
        "title": "Stanford Gala 245",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMRbjPzB9X2carAiJFBkFvupq7tNsHYMJKIw4_yiZjI9G3UAcPauF0dzCP6tQpryqf3AsDt5aLp_gD3wblLpJGNGaxJ_DcHYouOWHMswBU1ZdZOs9HM=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMRbjPzB9X2carAiJFBkFvupq7tNsHYMJKIw4_yiZjI9G3UAcPauF0dzCP6tQpryqf3AsDt5aLp_gD3wblLpJGNGaxJ_DcHYouOWHMswBU1ZdZOs9HM=w600"
      },
      {
        "id": "stanford-245",
        "title": "Stanford Gala 246",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOfMI-g0pom0T4mc0M83vc2e18xA35GmItg-hXWCkcs8ONDvyDl1m6gLkdwyO-2nj_vAO5OMMmgO4P7YC-piV-zdqPTcqM7BRC23A6G3GW2dh7P2lCd=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOfMI-g0pom0T4mc0M83vc2e18xA35GmItg-hXWCkcs8ONDvyDl1m6gLkdwyO-2nj_vAO5OMMmgO4P7YC-piV-zdqPTcqM7BRC23A6G3GW2dh7P2lCd=w600"
      },
      {
        "id": "stanford-246",
        "title": "Stanford Gala 247",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNYmjJf40-lw9xltVg1cFFNCOuMWRx7l6dsyVsGiSDE3yxLWayech2BvsVtiEkv-12B7lhMp0wJxlnz6RETpVkbP27LcdP0ck6YH3z50YHSbKyn9feN=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNYmjJf40-lw9xltVg1cFFNCOuMWRx7l6dsyVsGiSDE3yxLWayech2BvsVtiEkv-12B7lhMp0wJxlnz6RETpVkbP27LcdP0ck6YH3z50YHSbKyn9feN=w600"
      },
      {
        "id": "stanford-247",
        "title": "Stanford Gala 248",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN4YuqgmN0rWCwcFecIo4yUmv_X642KL1KqJHk33w3AlHdloDTmfsWHZiCa4pInLTsh7jl0jgEO-ho3Ie9ymdM84_UZ9g2DTvcWemIzwBkNatJ1GZG0=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN4YuqgmN0rWCwcFecIo4yUmv_X642KL1KqJHk33w3AlHdloDTmfsWHZiCa4pInLTsh7jl0jgEO-ho3Ie9ymdM84_UZ9g2DTvcWemIzwBkNatJ1GZG0=w600"
      },
      {
        "id": "stanford-248",
        "title": "Stanford Gala 249",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPDgGtYZqfc-cjzug8_8G0-aI_ptNANjLV4mggxVNdDcZeUAId0Q7L_G67uWMU87e0yM8zW02q37nZnh_UZsD1jqpHGvfDZkZhhRCiw5TWgzOOAnVn8=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPDgGtYZqfc-cjzug8_8G0-aI_ptNANjLV4mggxVNdDcZeUAId0Q7L_G67uWMU87e0yM8zW02q37nZnh_UZsD1jqpHGvfDZkZhhRCiw5TWgzOOAnVn8=w600"
      },
      {
        "id": "stanford-249",
        "title": "Stanford Gala 250",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMsmkVqMknK9j_97bKEn-IPJ3J7wgJesFSxULliZ1xt-oS1a58ftzd2r_diULpgLPaWGKD5F_9uekO5hO590u0CaM4WOYP9i5rkEtAjVjOrMVubRtpL=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMsmkVqMknK9j_97bKEn-IPJ3J7wgJesFSxULliZ1xt-oS1a58ftzd2r_diULpgLPaWGKD5F_9uekO5hO590u0CaM4WOYP9i5rkEtAjVjOrMVubRtpL=w600"
      },
      {
        "id": "stanford-250",
        "title": "Stanford Gala 251",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMddd5zYQrp8JA5acL0HWguPV7-dZSkliOgrloYDxmiMQ4ZWlF4wJ71kLyut6GJJGUuC71AH3Ngg-ttk1Qq2v6qHYWExvm_Ld17H1yChG2JvQOOfyeG=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMddd5zYQrp8JA5acL0HWguPV7-dZSkliOgrloYDxmiMQ4ZWlF4wJ71kLyut6GJJGUuC71AH3Ngg-ttk1Qq2v6qHYWExvm_Ld17H1yChG2JvQOOfyeG=w600"
      },
      {
        "id": "stanford-251",
        "title": "Stanford Gala 252",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMUvjB0mN7eb0f3XU9YbKmB4w9s8ciUNmiWkT7NUdiwF90YCrIsUgYjGrV35uT7v5hmM1J5t4U7uENhGnbx5YGVgkfLlaBkSMGIuPUu3lfVAuautlkK=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMUvjB0mN7eb0f3XU9YbKmB4w9s8ciUNmiWkT7NUdiwF90YCrIsUgYjGrV35uT7v5hmM1J5t4U7uENhGnbx5YGVgkfLlaBkSMGIuPUu3lfVAuautlkK=w600"
      },
      {
        "id": "stanford-252",
        "title": "Stanford Gala 253",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOVijLLOgNKfvfyDdrJdJaYysjOcBGaC1YvRBiwYc91sjoSODbEVHA3Ky8vKLUEVzv1JxPXhipK09FfWhkC3jcofqg1QBNbQ5OGp9T5z-1IVV6vialg=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOVijLLOgNKfvfyDdrJdJaYysjOcBGaC1YvRBiwYc91sjoSODbEVHA3Ky8vKLUEVzv1JxPXhipK09FfWhkC3jcofqg1QBNbQ5OGp9T5z-1IVV6vialg=w600"
      },
      {
        "id": "stanford-253",
        "title": "Stanford Gala 254",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMehAuyKZN0aGPi08cqJuNV1the8sud1SBLelqckatiC8miRtRB4t_iZ4SA9SiYrDNZCvWZFdXXR2KnfLKA5FN4GfHqd8WMh15a2hUTLZxRih7NiPsG=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMehAuyKZN0aGPi08cqJuNV1the8sud1SBLelqckatiC8miRtRB4t_iZ4SA9SiYrDNZCvWZFdXXR2KnfLKA5FN4GfHqd8WMh15a2hUTLZxRih7NiPsG=w600"
      },
      {
        "id": "stanford-254",
        "title": "Stanford Gala 255",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPcnebiuZYeXPmCG7nixXBcu3pFngmrzB9TIDw80vFITh1XjAMIn9WIm10JQHaSBGXrfNzSAdkdwKIClcUjbW0mcTGjpx-Tp-WzuW8z-V4eINw-Lu6o=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPcnebiuZYeXPmCG7nixXBcu3pFngmrzB9TIDw80vFITh1XjAMIn9WIm10JQHaSBGXrfNzSAdkdwKIClcUjbW0mcTGjpx-Tp-WzuW8z-V4eINw-Lu6o=w600"
      },
      {
        "id": "stanford-255",
        "title": "Stanford Gala 256",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNfbcu9lLmE9AEfdL3KjEEfuFqYlqzpflapLjnpcpK0CP-tmRi9xC7n75xu2hnwcb0DaasULKIYr-pjXV9CVx3xc3uyA0rH23DVNXXLZWavhXQC3PiC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNfbcu9lLmE9AEfdL3KjEEfuFqYlqzpflapLjnpcpK0CP-tmRi9xC7n75xu2hnwcb0DaasULKIYr-pjXV9CVx3xc3uyA0rH23DVNXXLZWavhXQC3PiC=w600"
      },
      {
        "id": "stanford-256",
        "title": "Stanford Gala 257",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPv150FduWqowCfMt7GkdheP_-872b9_CVrv4_h2YLENV1DLyQck0v8dz8y5Jn-KqTq-_dJRGb-97_t7L5qxsi-Xfcs3m5z1vVq4Frd-3JCTwk80n_w=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPv150FduWqowCfMt7GkdheP_-872b9_CVrv4_h2YLENV1DLyQck0v8dz8y5Jn-KqTq-_dJRGb-97_t7L5qxsi-Xfcs3m5z1vVq4Frd-3JCTwk80n_w=w600"
      },
      {
        "id": "stanford-257",
        "title": "Stanford Gala 258",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP1U4GmPJ57Bu88kt-QOZTCLLt-0MAMzSwc7VpWzJ9oQxQtCLbOPqID-ABCNUcst_R3pM7-ogNH7txPTXXtKaFO2x5RwTkSxtJ2JiGL5pz8TfvKMiJW=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP1U4GmPJ57Bu88kt-QOZTCLLt-0MAMzSwc7VpWzJ9oQxQtCLbOPqID-ABCNUcst_R3pM7-ogNH7txPTXXtKaFO2x5RwTkSxtJ2JiGL5pz8TfvKMiJW=w600"
      },
      {
        "id": "stanford-258",
        "title": "Stanford Gala 259",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPecqZsF-JrNj4XOtM-ps61DKZfnuXMaZAXwBfNDq6Kp1swK3HS7rga8Cv2SqU6wl2znuMLs9Gm_-i0adAbf7fukB1uBPfWkPo4iSoTy1R_G4ccQOdq=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPecqZsF-JrNj4XOtM-ps61DKZfnuXMaZAXwBfNDq6Kp1swK3HS7rga8Cv2SqU6wl2znuMLs9Gm_-i0adAbf7fukB1uBPfWkPo4iSoTy1R_G4ccQOdq=w600"
      },
      {
        "id": "stanford-259",
        "title": "Stanford Gala 260",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP-172KIu1i58xVjA6mqVNZeipQqe6JmL4oIphnYlauXe7aZEuZBrrR9bKeOFTHHiazOVy7hdEEzyn6bZDJ1UsK1CkVVopjJ4IzxP1AMGHlNiSjteED=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP-172KIu1i58xVjA6mqVNZeipQqe6JmL4oIphnYlauXe7aZEuZBrrR9bKeOFTHHiazOVy7hdEEzyn6bZDJ1UsK1CkVVopjJ4IzxP1AMGHlNiSjteED=w600"
      },
      {
        "id": "stanford-260",
        "title": "Stanford Gala 261",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNxeOsxHWbjIc_5Ic0RjBGSZvbBns2SL3tsDgp5PbnW8ZrRgyK-0gSPPTAfLMUMHVOlXDRbWJ2mij-MAy0tzY29nvkensLbI5KmNSD3S1TPX4V04ICF=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNxeOsxHWbjIc_5Ic0RjBGSZvbBns2SL3tsDgp5PbnW8ZrRgyK-0gSPPTAfLMUMHVOlXDRbWJ2mij-MAy0tzY29nvkensLbI5KmNSD3S1TPX4V04ICF=w600"
      },
      {
        "id": "stanford-261",
        "title": "Stanford Gala 262",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMscl0DS845Lgw5lI19D9bQ2N2BQZSNHxOVTdYbscyGm6_ukOLRxSF2tlZNobaXWZeP9vQP35Q_1KOZxFix5kI6HkhzUDPUbjYWC9AwX0MINBkCJRJE=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMscl0DS845Lgw5lI19D9bQ2N2BQZSNHxOVTdYbscyGm6_ukOLRxSF2tlZNobaXWZeP9vQP35Q_1KOZxFix5kI6HkhzUDPUbjYWC9AwX0MINBkCJRJE=w600"
      },
      {
        "id": "stanford-262",
        "title": "Stanford Gala 263",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPE1rYaEcBDnf--FTJmjNDkU29Ck3ZeCg5HBkXxpKLaOnBIH3SOTfR--vd8JXXc7lgb2xNreVJuIxuUdanzx-0zozGWAAfI43iBbm1-nneS9_i-zCER=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPE1rYaEcBDnf--FTJmjNDkU29Ck3ZeCg5HBkXxpKLaOnBIH3SOTfR--vd8JXXc7lgb2xNreVJuIxuUdanzx-0zozGWAAfI43iBbm1-nneS9_i-zCER=w600"
      },
      {
        "id": "stanford-263",
        "title": "Stanford Gala 264",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM4NIKFyLzf-VlaZLsHCD1hLb5zcOEkzEs3pefsfn7R7l3GdHrcpqwEuUEHn84mdYvZ_ocSGLwumz2wc1F830aXeacWjxnNNBw1Je1Ap8wDAAvPFjXa=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM4NIKFyLzf-VlaZLsHCD1hLb5zcOEkzEs3pefsfn7R7l3GdHrcpqwEuUEHn84mdYvZ_ocSGLwumz2wc1F830aXeacWjxnNNBw1Je1Ap8wDAAvPFjXa=w600"
      },
      {
        "id": "stanford-264",
        "title": "Stanford Gala 265",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMrqNpf4dEtKND-nXSy_gsr-2sevJyEnn5y6AvrJrtNCS6wkJ5ChkvHI90dsuagVfovX8ybwsmv3QTM9p4RZ69Wgixczi0YSHQGFhMjsvOLu2xmsSFo=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMrqNpf4dEtKND-nXSy_gsr-2sevJyEnn5y6AvrJrtNCS6wkJ5ChkvHI90dsuagVfovX8ybwsmv3QTM9p4RZ69Wgixczi0YSHQGFhMjsvOLu2xmsSFo=w600"
      },
      {
        "id": "stanford-265",
        "title": "Stanford Gala 266",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOw_g_G1aObQAEPPTnbBPtJPjOWqtKkfqHX1dMDxY0PFFEnn33QANSkB2c4SrT3DZHMvf0DiHNp-mRGksKJBAl2pQCwzF5Jib0jEyZVy-WG86xI7Wfw=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOw_g_G1aObQAEPPTnbBPtJPjOWqtKkfqHX1dMDxY0PFFEnn33QANSkB2c4SrT3DZHMvf0DiHNp-mRGksKJBAl2pQCwzF5Jib0jEyZVy-WG86xI7Wfw=w600"
      },
      {
        "id": "stanford-266",
        "title": "Stanford Gala 267",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOOD-993JzmO5aznQAblqJMQCOHY25sNTBmMJxlJTGpWH-Ui9Na3L2bVEl-ygRb6WcyFocQIhNAjtM-68tcsAomSFzVuVzQv9oLofTr9rGRFrbpVG_o=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOOD-993JzmO5aznQAblqJMQCOHY25sNTBmMJxlJTGpWH-Ui9Na3L2bVEl-ygRb6WcyFocQIhNAjtM-68tcsAomSFzVuVzQv9oLofTr9rGRFrbpVG_o=w600"
      },
      {
        "id": "stanford-267",
        "title": "Stanford Gala 268",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM6hFy8VuWLD797C1-BlZt-M-Tw2nOmdCDCT77BHzwCuYuxJyelIz3tFiGCcL8h6OANI6jX-oedq_tZYcQpCzJSlvRkjHyg7fnkoJmACEgS-YK6A5-q=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM6hFy8VuWLD797C1-BlZt-M-Tw2nOmdCDCT77BHzwCuYuxJyelIz3tFiGCcL8h6OANI6jX-oedq_tZYcQpCzJSlvRkjHyg7fnkoJmACEgS-YK6A5-q=w600"
      },
      {
        "id": "stanford-268",
        "title": "Stanford Gala 269",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOlfWU_dlaYOG0-28aaSEUNGR1WoaGJBa0oMP45-mnfXWrwYQGuz52iKhrBwa350Fy6LgKXckeZinHqWbsCQBuM8PuaaJhElswy65WjVqOTwP6rk6gF=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOlfWU_dlaYOG0-28aaSEUNGR1WoaGJBa0oMP45-mnfXWrwYQGuz52iKhrBwa350Fy6LgKXckeZinHqWbsCQBuM8PuaaJhElswy65WjVqOTwP6rk6gF=w600"
      },
      {
        "id": "stanford-269",
        "title": "Stanford Gala 270",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOh_JHiWxHvvamilBnJNXY8q8xalfvMfXB-6fc0En_P4EBM84U5iUSgJlzLEcuuZ6_-Kzn-tdiPpgN1mmhU_0GOWOhFFx_XPgrh-H4h4bTOcKsXeFzR=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOh_JHiWxHvvamilBnJNXY8q8xalfvMfXB-6fc0En_P4EBM84U5iUSgJlzLEcuuZ6_-Kzn-tdiPpgN1mmhU_0GOWOhFFx_XPgrh-H4h4bTOcKsXeFzR=w600"
      },
      {
        "id": "stanford-270",
        "title": "Stanford Gala 271",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNzvNT_S_lUz_6-kIS7rZEHPVTeSayFidBnVqaadOc5XdinJOcskpNo8PanLzyIQ9O9s_o0sM15tOiROeXwWlNb2Va8rtcCtRyOW_5E46jPlINKHRwf=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNzvNT_S_lUz_6-kIS7rZEHPVTeSayFidBnVqaadOc5XdinJOcskpNo8PanLzyIQ9O9s_o0sM15tOiROeXwWlNb2Va8rtcCtRyOW_5E46jPlINKHRwf=w600"
      },
      {
        "id": "stanford-271",
        "title": "Stanford Gala 272",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPAep4iZ2_UuoDycy_GYf8itOZee_RFuLAlQUo2a2zynjIR2T4kBGYjPxDDPsaf9yKJTkqQ2rGcwaocuoEC416ubcBk7Ik-Xv4Pa9eemTJepzG6xo4Q=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPAep4iZ2_UuoDycy_GYf8itOZee_RFuLAlQUo2a2zynjIR2T4kBGYjPxDDPsaf9yKJTkqQ2rGcwaocuoEC416ubcBk7Ik-Xv4Pa9eemTJepzG6xo4Q=w600"
      },
      {
        "id": "stanford-272",
        "title": "Stanford Gala 273",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPpxrRFhDisxXgmPhHrTrEAMt1VkgLzcpC1bHYDFqCZ4PAvvA0_in9tM1ehr4WbZx2mlJ25HPQwYbRiA46XAP5fvoIpQSkZadxe57e6X1JPhNakRa6d=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPpxrRFhDisxXgmPhHrTrEAMt1VkgLzcpC1bHYDFqCZ4PAvvA0_in9tM1ehr4WbZx2mlJ25HPQwYbRiA46XAP5fvoIpQSkZadxe57e6X1JPhNakRa6d=w600"
      },
      {
        "id": "stanford-273",
        "title": "Stanford Gala 274",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPPDDk5cT981mtdNMz4pQBZbezb5BCAJqFa1lOcwSiAJ2yfRRs8b621HmdNHdO_T8hOZpQvkDozXXow_tuov95c8e_FY3byyBNG0tMO8rGrONK5jdnC=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPPDDk5cT981mtdNMz4pQBZbezb5BCAJqFa1lOcwSiAJ2yfRRs8b621HmdNHdO_T8hOZpQvkDozXXow_tuov95c8e_FY3byyBNG0tMO8rGrONK5jdnC=w600"
      },
      {
        "id": "stanford-274",
        "title": "Stanford Gala 275",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP8Lc4OYwAb5KUYWMhJVgCAtCxJ8F-1Wwvcv91mP4t1Tv3LxFvz17aIPsFPvP46q2SZUqbtqgfKYboxf5WiJpGKeQgmEDZYVjlRKaXvU6nGxhdkgOAo=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP8Lc4OYwAb5KUYWMhJVgCAtCxJ8F-1Wwvcv91mP4t1Tv3LxFvz17aIPsFPvP46q2SZUqbtqgfKYboxf5WiJpGKeQgmEDZYVjlRKaXvU6nGxhdkgOAo=w600"
      },
      {
        "id": "stanford-275",
        "title": "Stanford Gala 276",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOkFqKOiEbu0BNc4pQe-_83_BsS1VqqKrKGJfHcm8-i62QVlB-yuGO466dgG50x_fI8N1LWAGZHTvqQexDhQwJAs3jy4PxnC9UNwp8kSUZlEDrc5JeK=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOkFqKOiEbu0BNc4pQe-_83_BsS1VqqKrKGJfHcm8-i62QVlB-yuGO466dgG50x_fI8N1LWAGZHTvqQexDhQwJAs3jy4PxnC9UNwp8kSUZlEDrc5JeK=w600"
      },
      {
        "id": "stanford-276",
        "title": "Stanford Gala 277",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM1dmoW_9HoTtV68Dg9643vq1pfeCKHs59xo8-fgHNLhuS9WvmBFET5mXAhkaNyypZMEmeefxq7MTTjIlF25yyIQdqzqBkkD_xqqE1KWdtTscqP3v5H=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM1dmoW_9HoTtV68Dg9643vq1pfeCKHs59xo8-fgHNLhuS9WvmBFET5mXAhkaNyypZMEmeefxq7MTTjIlF25yyIQdqzqBkkD_xqqE1KWdtTscqP3v5H=w600"
      },
      {
        "id": "stanford-277",
        "title": "Stanford Gala 278",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPWOyKanXe3_tVkyWTrZbXnOt77pHLOj_r5vUAtpJSPmUSQ6QzobwLB7HOj313623-YG2ZuOLytH6oN5llkyd5yddcwA92fCJuMFKhHLT5D8OcfX21W=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPWOyKanXe3_tVkyWTrZbXnOt77pHLOj_r5vUAtpJSPmUSQ6QzobwLB7HOj313623-YG2ZuOLytH6oN5llkyd5yddcwA92fCJuMFKhHLT5D8OcfX21W=w600"
      },
      {
        "id": "stanford-278",
        "title": "Stanford Gala 279",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNiQKFonNUJU74DZYlc8EajgfVbebJn-HTffWpe3a3lK2BqShAWt4AD_PEVgkGkmNLXOuiM-bKxVtHhGu4pOjmqyLg-q-WIQ2Mur8svoLQuLue2sK-z=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNiQKFonNUJU74DZYlc8EajgfVbebJn-HTffWpe3a3lK2BqShAWt4AD_PEVgkGkmNLXOuiM-bKxVtHhGu4pOjmqyLg-q-WIQ2Mur8svoLQuLue2sK-z=w600"
      },
      {
        "id": "stanford-279",
        "title": "Stanford Gala 280",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM3zhNXbS-jqkAEYgwvqeifjEQKT_bPR7jOUPfKteHayF9-Gx_4q30-kTqXmLcSq9cwSMCezuvDOHr5w4_fAdvQsJ9ryQgMMPWT0aa8T3hCTaZYs3Yr=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM3zhNXbS-jqkAEYgwvqeifjEQKT_bPR7jOUPfKteHayF9-Gx_4q30-kTqXmLcSq9cwSMCezuvDOHr5w4_fAdvQsJ9ryQgMMPWT0aa8T3hCTaZYs3Yr=w600"
      },
      {
        "id": "stanford-280",
        "title": "Stanford Gala 281",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPqi-_atl6AaQosMJLk7z93iyN2Fg-7yDDgDTlahQ1sVXv7mkZKiOO-lbAZpJH5rprvKACixnwYm3HQxFOAsHQzrooCMh7opuF2XsDivysc3PDHEhEX=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPqi-_atl6AaQosMJLk7z93iyN2Fg-7yDDgDTlahQ1sVXv7mkZKiOO-lbAZpJH5rprvKACixnwYm3HQxFOAsHQzrooCMh7opuF2XsDivysc3PDHEhEX=w600"
      },
      {
        "id": "stanford-281",
        "title": "Stanford Gala 282",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPom3nzlESXWAhwOwCMgjwspYOcMBN-tnbjzaeYAPNd5qXY0EI8jw9MNMne4sfawhEHLGtMuTldKh51mjSJr9P6IOnQY3ytO6OtWLGxDM7dR3UOtzoD=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPom3nzlESXWAhwOwCMgjwspYOcMBN-tnbjzaeYAPNd5qXY0EI8jw9MNMne4sfawhEHLGtMuTldKh51mjSJr9P6IOnQY3ytO6OtWLGxDM7dR3UOtzoD=w600"
      },
      {
        "id": "stanford-282",
        "title": "Stanford Gala 283",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPELQ3GeX0QDH66SFXbIR8CjQIGmFFu0IUxcmkST2Yz6GEoQ0oUpqVN7dJqlEo2zAGyrzwKV5Ouw3_eUfMg026d8p2Lct6JVcnthqHl1g1sbRRrSiyM=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPELQ3GeX0QDH66SFXbIR8CjQIGmFFu0IUxcmkST2Yz6GEoQ0oUpqVN7dJqlEo2zAGyrzwKV5Ouw3_eUfMg026d8p2Lct6JVcnthqHl1g1sbRRrSiyM=w600"
      },
      {
        "id": "stanford-283",
        "title": "Stanford Gala 284",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOaQQiKryNhtVo3MNYbkab2BDqy3LeCBZB3cicJvhmkv6HtuBeXvLjHd9cxB3G4fZYDVaOuhkwvN0qk1vT22FI09t03IKLKOqBXCqNjdMnTgw_wdiRc=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOaQQiKryNhtVo3MNYbkab2BDqy3LeCBZB3cicJvhmkv6HtuBeXvLjHd9cxB3G4fZYDVaOuhkwvN0qk1vT22FI09t03IKLKOqBXCqNjdMnTgw_wdiRc=w600"
      },
      {
        "id": "stanford-284",
        "title": "Stanford Gala 285",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPwib6GeF72FmCDcb0GAHrftY5MPQ10lDNhyBPgjHK6fayoMxOlEV1OKE2_GxGwlIM74tLzxWwuG66IwhKLnV2stbgkd7OHDISe8M4aNM1UWWf4C8oZ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPwib6GeF72FmCDcb0GAHrftY5MPQ10lDNhyBPgjHK6fayoMxOlEV1OKE2_GxGwlIM74tLzxWwuG66IwhKLnV2stbgkd7OHDISe8M4aNM1UWWf4C8oZ=w600"
      },
      {
        "id": "stanford-285",
        "title": "Stanford Gala 286",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNPEb-oL0B0ysDFTh7SVCsuSU_5MUFtrcH1VK_eCYvbvZpcW91rtqFChdckPqyzv6rUOTAA0uI5r0DS4RfI3jB5dHson7IJF-opJpU0wAgwuAETtcyQ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNPEb-oL0B0ysDFTh7SVCsuSU_5MUFtrcH1VK_eCYvbvZpcW91rtqFChdckPqyzv6rUOTAA0uI5r0DS4RfI3jB5dHson7IJF-opJpU0wAgwuAETtcyQ=w600"
      },
      {
        "id": "stanford-286",
        "title": "Stanford Gala 287",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNgpwJSgzijP1XzB8tGFMdBMv-YBbOd1F0U_Gd0m3prHUA3tshVA0ZGnmlKSCWfC2O4lPsSPjpNDGyolawBgqhKGSjRG9Cfs77HTSd94kONimP_XjVD=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNgpwJSgzijP1XzB8tGFMdBMv-YBbOd1F0U_Gd0m3prHUA3tshVA0ZGnmlKSCWfC2O4lPsSPjpNDGyolawBgqhKGSjRG9Cfs77HTSd94kONimP_XjVD=w600"
      },
      {
        "id": "stanford-287",
        "title": "Stanford Gala 288",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNd2dC5hhaEtWcW8hz_f9ExsWo0-dr_s9JbsS6j7xdvYBlZCM0oUIOI8aigeLNVdnIimXDVviXAvQtsEVaYDhe0qZUlKgwg8_-UiJdkm2j7bG1yGS5F=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNd2dC5hhaEtWcW8hz_f9ExsWo0-dr_s9JbsS6j7xdvYBlZCM0oUIOI8aigeLNVdnIimXDVviXAvQtsEVaYDhe0qZUlKgwg8_-UiJdkm2j7bG1yGS5F=w600"
      },
      {
        "id": "stanford-288",
        "title": "Stanford Gala 289",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNmr5DQW6qkcRzahJo0jxUKzWoPDsR7mwEUJLKYB7iJoBEoNT3RewwBcSX10xOsrBS9t71uHiD8N1LBRkDB8Uk6iC3KkQtj6a5qPOv_oXOyq4x9cGBb=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNmr5DQW6qkcRzahJo0jxUKzWoPDsR7mwEUJLKYB7iJoBEoNT3RewwBcSX10xOsrBS9t71uHiD8N1LBRkDB8Uk6iC3KkQtj6a5qPOv_oXOyq4x9cGBb=w600"
      },
      {
        "id": "stanford-289",
        "title": "Stanford Gala 290",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMntTgnfl4dVMmMF5wRjTLgDUzh65fM66CLWPHugZLICC-xEzj1UpXFl9vlTgkHgZqpkCwTx6VqVj0NavsYyElmP3WdQRgc0ciqa5FByJ1Vs5OqMe1V=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMntTgnfl4dVMmMF5wRjTLgDUzh65fM66CLWPHugZLICC-xEzj1UpXFl9vlTgkHgZqpkCwTx6VqVj0NavsYyElmP3WdQRgc0ciqa5FByJ1Vs5OqMe1V=w600"
      },
      {
        "id": "stanford-290",
        "title": "Stanford Gala 291",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOAcKOH6KmgicClKJLG5Y0ZVolFKRSJDd3MOXC3ZMe9MjU7_OF1NV0RMWmcUxh1rGPnLMbjfNE0irZo1i_XFP4nE9hlyYPuVeK5uIEX7aSh-bLvd2Ur=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOAcKOH6KmgicClKJLG5Y0ZVolFKRSJDd3MOXC3ZMe9MjU7_OF1NV0RMWmcUxh1rGPnLMbjfNE0irZo1i_XFP4nE9hlyYPuVeK5uIEX7aSh-bLvd2Ur=w600"
      },
      {
        "id": "stanford-291",
        "title": "Stanford Gala 292",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMH3Ea-M7GcbiP8ipKKev6g7DNYvbqar2Ma5XhDlwkyJ2Ga47V2EIMf8B-9AmO3c7L5NEFMwk6k5DhOefHXqknCKQYO0bAQdllXEbYHTh6M3_eHZuBP=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMH3Ea-M7GcbiP8ipKKev6g7DNYvbqar2Ma5XhDlwkyJ2Ga47V2EIMf8B-9AmO3c7L5NEFMwk6k5DhOefHXqknCKQYO0bAQdllXEbYHTh6M3_eHZuBP=w600"
      },
      {
        "id": "stanford-292",
        "title": "Stanford Gala 293",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM8yQPXKHSaOpDFD3gJ7NZpW2Ch1vs7wcg5kY_R1DReYNjghzfctJNlOs3-4iVLa7_Iw76l3N-D6W67r5FtVO1ycpXs54eJbo8JCwchDlXeDWjMH1jj=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM8yQPXKHSaOpDFD3gJ7NZpW2Ch1vs7wcg5kY_R1DReYNjghzfctJNlOs3-4iVLa7_Iw76l3N-D6W67r5FtVO1ycpXs54eJbo8JCwchDlXeDWjMH1jj=w600"
      },
      {
        "id": "stanford-293",
        "title": "Stanford Gala 294",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO0sUPwpeWt0QybnxEALK6HpI2vNNJu9ZpfflNkHBQXeJxCR8fT7-Xoa8kaL5Ot23KMKHQpJy1hnY0UsND9hpuzApxdOxfGxitcOTV8t4F9njc4U5gi=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO0sUPwpeWt0QybnxEALK6HpI2vNNJu9ZpfflNkHBQXeJxCR8fT7-Xoa8kaL5Ot23KMKHQpJy1hnY0UsND9hpuzApxdOxfGxitcOTV8t4F9njc4U5gi=w600"
      },
      {
        "id": "stanford-294",
        "title": "Stanford Gala 295",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0k7CzSZuJtnC1D37iedgwPmgdMWxxl6AuwJ5AojgzYnZRd0EU8mY5QYlveSYT-hc6J_3r0DXuszTHJ-BPs5AkEmuBJGXTKvFIVMFhJdDP_U_w9P8F=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0k7CzSZuJtnC1D37iedgwPmgdMWxxl6AuwJ5AojgzYnZRd0EU8mY5QYlveSYT-hc6J_3r0DXuszTHJ-BPs5AkEmuBJGXTKvFIVMFhJdDP_U_w9P8F=w600"
      },
      {
        "id": "stanford-295",
        "title": "Stanford Gala 296",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPqNhS9HbTrATye8ElSmmslGfIOPG6jrKlh9p7s0elm9AsJqfxNN5ejTGkm1tAG9MCVWlfiK4t4WBb2LAqqPNv2438f-_TIU0PVSJ_k8f2WfxU_ysEd=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPqNhS9HbTrATye8ElSmmslGfIOPG6jrKlh9p7s0elm9AsJqfxNN5ejTGkm1tAG9MCVWlfiK4t4WBb2LAqqPNv2438f-_TIU0PVSJ_k8f2WfxU_ysEd=w600"
      },
      {
        "id": "stanford-296",
        "title": "Stanford Gala 297",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOlVFB_6GZ6po97pT9lfc_d9udDIHxVr3lib5QboOMd1VMgrKrika7TE0qWaizLyhAqNL6ECTr22EmB6NyUMvtFo3dlQD6lljC52QlK6P5eqDAMh1eW=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOlVFB_6GZ6po97pT9lfc_d9udDIHxVr3lib5QboOMd1VMgrKrika7TE0qWaizLyhAqNL6ECTr22EmB6NyUMvtFo3dlQD6lljC52QlK6P5eqDAMh1eW=w600"
      },
      {
        "id": "stanford-297",
        "title": "Stanford Gala 298",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNFxWdxw1F3BltIqVYZaHoiU3yRb2n8b6BSTpIvxTZrlDNVXk5b4gqH1-RSnecIIk7TmgAkOpXAXKa-4p9q1PFFwlMPtR-4ZZL082d-vdIf5y3F2Vsd=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNFxWdxw1F3BltIqVYZaHoiU3yRb2n8b6BSTpIvxTZrlDNVXk5b4gqH1-RSnecIIk7TmgAkOpXAXKa-4p9q1PFFwlMPtR-4ZZL082d-vdIf5y3F2Vsd=w600"
      },
      {
        "id": "stanford-298",
        "title": "Stanford Gala 299",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNBWAYefh78FLBjZ3_UHUPPtOkaV_iEAYtTyobDwbierlXF5xv6F4KEyKlvYBSTIW7zCYbfxro9LhE_x16zK5ubeNXOI6AaThsoUshxuSyfxlV9WCD5=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNBWAYefh78FLBjZ3_UHUPPtOkaV_iEAYtTyobDwbierlXF5xv6F4KEyKlvYBSTIW7zCYbfxro9LhE_x16zK5ubeNXOI6AaThsoUshxuSyfxlV9WCD5=w600"
      },
      {
        "id": "stanford-299",
        "title": "Stanford Gala 300",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNjgEar7--NRTL17aP782GI_oOpoThEGcqI7QHZu_tZPp291jJiQyGw-W1FhP309wdJrXxXi5WjjuFXnI1azPPmETpFLpWQbdpQsQKhICYTWEjf7_Zz=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNjgEar7--NRTL17aP782GI_oOpoThEGcqI7QHZu_tZPp291jJiQyGw-W1FhP309wdJrXxXi5WjjuFXnI1azPPmETpFLpWQbdpQsQKhICYTWEjf7_Zz=w600"
      },
      {
        "id": "stanford-300",
        "title": "Stanford Gala 301",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN-0yP7Sd7r2U-XtU7HUhRkM18CzC9cp_aXOwb2b18E6WuBb6cWCbaQiwcawuq6Kda5Ji8xbKS_o3BEiwhjnpHfBOquiqrTDoLGjRR5LwQH3wKM3XX2=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN-0yP7Sd7r2U-XtU7HUhRkM18CzC9cp_aXOwb2b18E6WuBb6cWCbaQiwcawuq6Kda5Ji8xbKS_o3BEiwhjnpHfBOquiqrTDoLGjRR5LwQH3wKM3XX2=w600"
      },
      {
        "id": "stanford-301",
        "title": "Stanford Gala 302",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM5wcw5eaGHEWWO_qxLveP1Q0J4b4-ppbCc7q3zN4u_TGYwEZCaO5CIlYlo3IlepEr3K2NfjzMIFCke6L8Hnhc4qBRARr6MG689XAaQU760y9gbaNeK=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM5wcw5eaGHEWWO_qxLveP1Q0J4b4-ppbCc7q3zN4u_TGYwEZCaO5CIlYlo3IlepEr3K2NfjzMIFCke6L8Hnhc4qBRARr6MG689XAaQU760y9gbaNeK=w600"
      },
      {
        "id": "stanford-302",
        "title": "Stanford Gala 303",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0WPdHKzNDOEjQ74jxdIYzJnctEEOmA9W9vGefNNlH0V04fE_OZSgoGd2szVnLF6Y5b5r6jsbgdLjyVdBkmx2iGowoTSeCY78Qbvb8Xw6AU7vWFkRL=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP0WPdHKzNDOEjQ74jxdIYzJnctEEOmA9W9vGefNNlH0V04fE_OZSgoGd2szVnLF6Y5b5r6jsbgdLjyVdBkmx2iGowoTSeCY78Qbvb8Xw6AU7vWFkRL=w600"
      },
      {
        "id": "stanford-303",
        "title": "Stanford Gala 304",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNQ_4ew_oNDAXCG9pMKw5tkDAl9HuilAF8724cEIUAL0DrZnhCXkr_zcViNv6M9QbiKjk_Frx26ZdBAluC_knWb8E1xO3_a0udB1YJ7p92W-myZ3R8s=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNQ_4ew_oNDAXCG9pMKw5tkDAl9HuilAF8724cEIUAL0DrZnhCXkr_zcViNv6M9QbiKjk_Frx26ZdBAluC_knWb8E1xO3_a0udB1YJ7p92W-myZ3R8s=w600"
      },
      {
        "id": "stanford-304",
        "title": "Stanford Gala 305",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN8CkFUJCQHz5IrFm31A2fpIgA8Rz8B_jWIinbxWY3wnQWqp3kYKCzxkEDDVo76UsBcoOVqdBfSnE99LUoRaYmdqouj8Cy7On8auW-ebXRj__uE40XG=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN8CkFUJCQHz5IrFm31A2fpIgA8Rz8B_jWIinbxWY3wnQWqp3kYKCzxkEDDVo76UsBcoOVqdBfSnE99LUoRaYmdqouj8Cy7On8auW-ebXRj__uE40XG=w600"
      },
      {
        "id": "stanford-305",
        "title": "Stanford Gala 306",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOg138SD7Xkk-XmhRBPMIS7tOT5cMq1vjOiDUe2cptSVHy8GVfdP9N3uCt996gLXgRHuOgJ74XXMRB_wjvu2gITX9qE7b0apw4vAJGNDjrTLiu_G7PA=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOg138SD7Xkk-XmhRBPMIS7tOT5cMq1vjOiDUe2cptSVHy8GVfdP9N3uCt996gLXgRHuOgJ74XXMRB_wjvu2gITX9qE7b0apw4vAJGNDjrTLiu_G7PA=w600"
      },
      {
        "id": "stanford-306",
        "title": "Stanford Gala 307",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN6K5XuryUDN6uOr72RWsRSa95SeRG9pgnZw5q1DXPybPA7E1WI5uchS27JkanQHZoO05Si6HM2uymkC5ahWaECohvxS_iYt974oGJvzqm-SN7U24kL=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN6K5XuryUDN6uOr72RWsRSa95SeRG9pgnZw5q1DXPybPA7E1WI5uchS27JkanQHZoO05Si6HM2uymkC5ahWaECohvxS_iYt974oGJvzqm-SN7U24kL=w600"
      },
      {
        "id": "stanford-307",
        "title": "Stanford Gala 308",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO8zxZgyZIKIdevsWbLNkKBiJc59tFSA2NWfZQDc-XsYHRzlFqxHF6hM1KqxZjPudDdQPUsXXZDOJzo-YCT-Yqv1JyM509ZjJ1pc-ODF9z-fOU5QI2J=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO8zxZgyZIKIdevsWbLNkKBiJc59tFSA2NWfZQDc-XsYHRzlFqxHF6hM1KqxZjPudDdQPUsXXZDOJzo-YCT-Yqv1JyM509ZjJ1pc-ODF9z-fOU5QI2J=w600"
      },
      {
        "id": "stanford-308",
        "title": "Stanford Gala 309",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPu0D--huDP64GkXu1RhZgAdmzNQUXp1eGwDJfud71j2xCT0efiWnbwKG11STwH1onj3zfJOcl4J6Q6VO6dThW0c65gfF0rT8QJ9TIXpq66CJWklti1=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPu0D--huDP64GkXu1RhZgAdmzNQUXp1eGwDJfud71j2xCT0efiWnbwKG11STwH1onj3zfJOcl4J6Q6VO6dThW0c65gfF0rT8QJ9TIXpq66CJWklti1=w600"
      },
      {
        "id": "stanford-309",
        "title": "Stanford Gala 310",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN4ltNHermTrBaYPmHWkicOO0nbgCTdIzNNcYXYGFXyrmQGr6TXPpKmVvWr08adQStc84qEaN5O_g4PMGewjV0sWwqZnce8BfMpVKyWNp8IVatA3_Ho=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN4ltNHermTrBaYPmHWkicOO0nbgCTdIzNNcYXYGFXyrmQGr6TXPpKmVvWr08adQStc84qEaN5O_g4PMGewjV0sWwqZnce8BfMpVKyWNp8IVatA3_Ho=w600"
      },
      {
        "id": "stanford-310",
        "title": "Stanford Gala 311",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMksUkpmcj6mNlRJIlT7KPMHyXF__KSAENfoQaEPaadtgM5-UH-J7AaCVUHUiu4Zfl3K2zN0s1HeN_SwNu5cIQDP_GjbmTnbl8exy_p5yJ_bM9fHj6F=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMksUkpmcj6mNlRJIlT7KPMHyXF__KSAENfoQaEPaadtgM5-UH-J7AaCVUHUiu4Zfl3K2zN0s1HeN_SwNu5cIQDP_GjbmTnbl8exy_p5yJ_bM9fHj6F=w600"
      },
      {
        "id": "stanford-311",
        "title": "Stanford Gala 312",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPZEz5FYqUjgvTmDhaSXqYdlUllvU8IBcYtqtdMul-sai5rWZ4S-G4d_fA7i9YbclC3CCNtxWQzmN15O4kV2Pl0T8gZPsId1A973KDWpA5cP8x-6KdQ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPZEz5FYqUjgvTmDhaSXqYdlUllvU8IBcYtqtdMul-sai5rWZ4S-G4d_fA7i9YbclC3CCNtxWQzmN15O4kV2Pl0T8gZPsId1A973KDWpA5cP8x-6KdQ=w600"
      },
      {
        "id": "stanford-312",
        "title": "Stanford Gala 313",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNfvKzkfEgs6sg-rahIg4-aTQExVE4LHbyvylQHJxXaRKWOmUBFtvP-fmiS2DoGFjZnWV0PggPA67DbVzoNdXxRcXsH51X0bY2uqQSAyeIEqYOn6BTL=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNfvKzkfEgs6sg-rahIg4-aTQExVE4LHbyvylQHJxXaRKWOmUBFtvP-fmiS2DoGFjZnWV0PggPA67DbVzoNdXxRcXsH51X0bY2uqQSAyeIEqYOn6BTL=w600"
      },
      {
        "id": "stanford-313",
        "title": "Stanford Gala 314",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMyv8lBCacJ7RLbcNWujUp7dR-m0Akq278LEnEBh0pXKAZHpPeH75ixLXiELJ85IGGrV2iXsm4nM-N9WX6bYgxGONMLveGlDEd9L2DIqQ1mAAj_qUHf=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMyv8lBCacJ7RLbcNWujUp7dR-m0Akq278LEnEBh0pXKAZHpPeH75ixLXiELJ85IGGrV2iXsm4nM-N9WX6bYgxGONMLveGlDEd9L2DIqQ1mAAj_qUHf=w600"
      },
      {
        "id": "stanford-314",
        "title": "Stanford Gala 315",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN-oVs5sAuGDa30PjQReEqom3-wK-sDve5_WWjU5OvCyw4Dm-yTjoZL5GbDEuM_bKg-2KUTpOFNuAUGz4zEJHmXUCe0a_TY5w_CGNqslWzGtXQXtjjs=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN-oVs5sAuGDa30PjQReEqom3-wK-sDve5_WWjU5OvCyw4Dm-yTjoZL5GbDEuM_bKg-2KUTpOFNuAUGz4zEJHmXUCe0a_TY5w_CGNqslWzGtXQXtjjs=w600"
      },
      {
        "id": "stanford-315",
        "title": "Stanford Gala 316",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPt5uvytYwWuJHc7STCHdakHv8nE2c7xG3TNyScF-Vu51J1CfpcyUr43-qVWuFAXnjAhHNhHeqjv1OL6rO9LP-BqB6uav5pSpctzorQ0uvQektfocJR=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPt5uvytYwWuJHc7STCHdakHv8nE2c7xG3TNyScF-Vu51J1CfpcyUr43-qVWuFAXnjAhHNhHeqjv1OL6rO9LP-BqB6uav5pSpctzorQ0uvQektfocJR=w600"
      },
      {
        "id": "stanford-316",
        "title": "Stanford Gala 317",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMyFFh4Pn19k7CLFZUQsSDBoo91LGzpeOmyA3uw3_UhoGqMeSRojP7xiaC5-iDLdSvt2LNf85vO2E5TNy7Qp-TrJ6DTPwDlqCzQ0FUUNf-_p5f-kArf=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMyFFh4Pn19k7CLFZUQsSDBoo91LGzpeOmyA3uw3_UhoGqMeSRojP7xiaC5-iDLdSvt2LNf85vO2E5TNy7Qp-TrJ6DTPwDlqCzQ0FUUNf-_p5f-kArf=w600"
      },
      {
        "id": "stanford-317",
        "title": "Stanford Gala 318",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNnQIjt5twLJ5bIvHP1FWbxYg8vDFFdoy4Ksd8R_S1hmS9oHp1rEyXBBAHdd-dhhlKFfyY7tR6aWwoZuriKLaKflvDavzHVTMdNcajSwBDgTH2N3ehA=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNnQIjt5twLJ5bIvHP1FWbxYg8vDFFdoy4Ksd8R_S1hmS9oHp1rEyXBBAHdd-dhhlKFfyY7tR6aWwoZuriKLaKflvDavzHVTMdNcajSwBDgTH2N3ehA=w600"
      },
      {
        "id": "stanford-318",
        "title": "Stanford Gala 319",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPtevCMuxDDilmBv_D9aaO5RsOAbmahhfhkBjkRh7an1_QrHm5PgFoAPTxhqR8Wuu0lZdH3o-rI0ee53vXcmT3fQBeRBeJEuY8k1eoUiPVSIAioODm6=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPtevCMuxDDilmBv_D9aaO5RsOAbmahhfhkBjkRh7an1_QrHm5PgFoAPTxhqR8Wuu0lZdH3o-rI0ee53vXcmT3fQBeRBeJEuY8k1eoUiPVSIAioODm6=w600"
      },
      {
        "id": "stanford-319",
        "title": "Stanford Gala 320",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczMD2__Shh1sfAngXIaanWgq94YQfagJFfOHTsqmB5z_u_-JOnvhhUYnQpSrUdvQ8WhUjuylVBnPccZ9GJBUnpnZ8fOSV-0JcAQZNnVj2P-HMaBexoDN=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczMD2__Shh1sfAngXIaanWgq94YQfagJFfOHTsqmB5z_u_-JOnvhhUYnQpSrUdvQ8WhUjuylVBnPccZ9GJBUnpnZ8fOSV-0JcAQZNnVj2P-HMaBexoDN=w600"
      },
      {
        "id": "stanford-320",
        "title": "Stanford Gala 321",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOQKmzMOxqJSr_un3zBlXM5IUvrqHOG2xtJPI9xA36WWlfg-lCXSMYZdtFldj0Ns0DG-OBLRzsGhzQKDBzP7_Gkekad5Wlt58XJ3l7jQmgSE_OtxmUN=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOQKmzMOxqJSr_un3zBlXM5IUvrqHOG2xtJPI9xA36WWlfg-lCXSMYZdtFldj0Ns0DG-OBLRzsGhzQKDBzP7_Gkekad5Wlt58XJ3l7jQmgSE_OtxmUN=w600"
      },
      {
        "id": "stanford-321",
        "title": "Stanford Gala 322",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczNYPCjz9Gc3LriXBH8fBdPaJfI7tQKYUCk6c1nuqOTT-Z-gWwyjoXryGdOiRHlag2Eg5-_VT4A7Lx6XgpFO8GF7YmXDUqmAskgsENdM71wAmqBlgDGg=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczNYPCjz9Gc3LriXBH8fBdPaJfI7tQKYUCk6c1nuqOTT-Z-gWwyjoXryGdOiRHlag2Eg5-_VT4A7Lx6XgpFO8GF7YmXDUqmAskgsENdM71wAmqBlgDGg=w600"
      },
      {
        "id": "stanford-322",
        "title": "Stanford Gala 323",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO7zeuRIrYqkyxQKNkQn3-dzVtRdy9b-385ypWBNynnI2d-4XuA742pxvo8gjOqschG_Y5RRbEglkEZ9uE38zfBcawlY_U7tzmLD4F9w64zWK9hM15C=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO7zeuRIrYqkyxQKNkQn3-dzVtRdy9b-385ypWBNynnI2d-4XuA742pxvo8gjOqschG_Y5RRbEglkEZ9uE38zfBcawlY_U7tzmLD4F9w64zWK9hM15C=w600"
      },
      {
        "id": "stanford-323",
        "title": "Stanford Gala 324",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczO5Y1jBeX6xS8QDKE7eotdC0SealYL5ANdOtg5Vbw1qrcrTFWHyzkuPs61neVbbJ36YFkkzDAKXsZxVANJ-Q1kYK9uvX118tq8ZntWAOo4-foCunHL-=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczO5Y1jBeX6xS8QDKE7eotdC0SealYL5ANdOtg5Vbw1qrcrTFWHyzkuPs61neVbbJ36YFkkzDAKXsZxVANJ-Q1kYK9uvX118tq8ZntWAOo4-foCunHL-=w600"
      },
      {
        "id": "stanford-324",
        "title": "Stanford Gala 325",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPzDqNborsjF03F77MoXYalRxIThCNVt4vniRX_-MCh5aDlTb8ldb7-wKkSvHrln1tF9N9EO36uRyi0efBBqfDcaIdizQv8V1POHmXyfp_WeTEHljX6=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPzDqNborsjF03F77MoXYalRxIThCNVt4vniRX_-MCh5aDlTb8ldb7-wKkSvHrln1tF9N9EO36uRyi0efBBqfDcaIdizQv8V1POHmXyfp_WeTEHljX6=w600"
      },
      {
        "id": "stanford-325",
        "title": "Stanford Gala 326",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczM-q9Ub9wyruVCe6U78_0eBDxRRd8_gS6UTQMq8e3d9CGVXprQzAI5mP1mY45voUkfeYb1zE0sDsuVQTA5G9z4053zWREkSGXJRLgNplGsLPpMn96Aw=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczM-q9Ub9wyruVCe6U78_0eBDxRRd8_gS6UTQMq8e3d9CGVXprQzAI5mP1mY45voUkfeYb1zE0sDsuVQTA5G9z4053zWREkSGXJRLgNplGsLPpMn96Aw=w600"
      },
      {
        "id": "stanford-326",
        "title": "Stanford Gala 327",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczP7F6p-B5QkIQd53HxFaNusCMbgAygO4NAwyLtS-hbbam5Ns_xiJly1TKPWjiRFZhgZddCesNo3RXigoylJlp1B_MHTZ7eq_yPeWQ-UCCSOyBaDuu01=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczP7F6p-B5QkIQd53HxFaNusCMbgAygO4NAwyLtS-hbbam5Ns_xiJly1TKPWjiRFZhgZddCesNo3RXigoylJlp1B_MHTZ7eq_yPeWQ-UCCSOyBaDuu01=w600"
      },
      {
        "id": "stanford-327",
        "title": "Stanford Gala 328",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPfE0dGZCRzy064H3PSISgUOMH2DnCGdM9N06dU-rqqZsAZLFl5j8NiWA4fD3pt53QxJ6JDqG2V4ALAFGOQZof6biqY64Xw_X_3feJxmGDypu3GtgkQ=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPfE0dGZCRzy064H3PSISgUOMH2DnCGdM9N06dU-rqqZsAZLFl5j8NiWA4fD3pt53QxJ6JDqG2V4ALAFGOQZof6biqY64Xw_X_3feJxmGDypu3GtgkQ=w600"
      },
      {
        "id": "stanford-328",
        "title": "Stanford Gala 329",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczN1a3eqabsUDXGLJE-78gzoBr3h7C6318hZZKUDyA9zFSNxnS4_JUVm0zI2nvXzwML-ouJBJ4YX-GU09Wi45yQKMoRfygq6LD0IiIMnVeqgqPvFOUto=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczN1a3eqabsUDXGLJE-78gzoBr3h7C6318hZZKUDyA9zFSNxnS4_JUVm0zI2nvXzwML-ouJBJ4YX-GU09Wi45yQKMoRfygq6LD0IiIMnVeqgqPvFOUto=w600"
      },
      {
        "id": "stanford-329",
        "title": "Stanford Gala 330",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczPYEi2F4IvaEobrFO-ljh1c31nyeI5qRsRh8k04fXSColrV4OgDwBkZe1C2UPNzO06spV_rwv3A06p_sItN-TySjvLkrs3B-i9dm3x4aEg9whcfkeN7=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczPYEi2F4IvaEobrFO-ljh1c31nyeI5qRsRh8k04fXSColrV4OgDwBkZe1C2UPNzO06spV_rwv3A06p_sItN-TySjvLkrs3B-i9dm3x4aEg9whcfkeN7=w600"
      },
      {
        "id": "stanford-330",
        "title": "Stanford Gala 331",
        "thumbUrl": "https://lh3.googleusercontent.com/pw/AP1GczOhYT8HbusTNkzbwiQLwEOAtoCMwW3SoKaQq3dWLLPYMjtQU-KADERxySRRN-QWI25p6Z8JKxPUGG2cREqVJg6jrpZxzbrVoxsCkTFyWnSj90ShWl54=w1200",
        "fullUrl": "https://lh3.googleusercontent.com/pw/AP1GczOhYT8HbusTNkzbwiQLwEOAtoCMwW3SoKaQq3dWLLPYMjtQU-KADERxySRRN-QWI25p6Z8JKxPUGG2cREqVJg6jrpZxzbrVoxsCkTFyWnSj90ShWl54=w600"
      }
    ]
  },
  {
    "id": "photo-gotbit",
    "title": "Gotbit Web3 Summit & Private Gala",
    "client": "Gotbit Hedge Fund",
    "year": "2024",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1PrsvkbKfbxWRbqA0xPD_CczK_B-Y_b_C?usp=drive_link",
    "coverImage": "https://lh3.googleusercontent.com/d/1VCbzrSrwG2Aes4NEoKXvwyiJuL0QOnbS=w1000",
    "tagline": "Exclusive crypto conference event coverage spotlighting international delegates, private banquet, and stage presentations.",
    "photoCount": 50,
    "photos": [
      {
        "id": "1VCbzrSrwG2Aes4NEoKXvwyiJuL0QOnbS",
        "title": "Gotbit-01.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VCbzrSrwG2Aes4NEoKXvwyiJuL0QOnbS=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VCbzrSrwG2Aes4NEoKXvwyiJuL0QOnbS=w1920"
      },
      {
        "id": "1wx603vnEcYfbkR6hhEoKeU2w9_uLKGjc",
        "title": "Gotbit-02.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wx603vnEcYfbkR6hhEoKeU2w9_uLKGjc=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wx603vnEcYfbkR6hhEoKeU2w9_uLKGjc=w1920"
      },
      {
        "id": "1-9SrxlrfPd13oVRmxeG7FbGw5yUici9s",
        "title": "Gotbit-03.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-9SrxlrfPd13oVRmxeG7FbGw5yUici9s=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-9SrxlrfPd13oVRmxeG7FbGw5yUici9s=w1920"
      },
      {
        "id": "1qZhYPLikjEKDLba4zs5-FpiwgyRwZ91J",
        "title": "Gotbit-04.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1qZhYPLikjEKDLba4zs5-FpiwgyRwZ91J=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1qZhYPLikjEKDLba4zs5-FpiwgyRwZ91J=w1920"
      },
      {
        "id": "1x4c39XIOnxK-h9zmvgWc1KCeaI6XxDAh",
        "title": "Gotbit-05.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1x4c39XIOnxK-h9zmvgWc1KCeaI6XxDAh=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1x4c39XIOnxK-h9zmvgWc1KCeaI6XxDAh=w1920"
      },
      {
        "id": "1MlEhKxNJlrASN-iRcM0mizKmPuF6I5Yl",
        "title": "Gotbit-06.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1MlEhKxNJlrASN-iRcM0mizKmPuF6I5Yl=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1MlEhKxNJlrASN-iRcM0mizKmPuF6I5Yl=w1920"
      },
      {
        "id": "15AEOov0NE1zlTkltvl3BrUhYzD3RHUYd",
        "title": "Gotbit-07.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15AEOov0NE1zlTkltvl3BrUhYzD3RHUYd=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/15AEOov0NE1zlTkltvl3BrUhYzD3RHUYd=w1920"
      },
      {
        "id": "1iSBk2E36ymMKUOvzkcpXbKMmhvFFlOUz",
        "title": "Gotbit-08.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iSBk2E36ymMKUOvzkcpXbKMmhvFFlOUz=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iSBk2E36ymMKUOvzkcpXbKMmhvFFlOUz=w1920"
      },
      {
        "id": "1AYBK2x7uUcCGLfJgc25W4hKGxf05DD3n",
        "title": "Gotbit-09.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1AYBK2x7uUcCGLfJgc25W4hKGxf05DD3n=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1AYBK2x7uUcCGLfJgc25W4hKGxf05DD3n=w1920"
      },
      {
        "id": "1tzR13bSJ9mVvU5314e0cYTLpkquNi-uD",
        "title": "Gotbit-10.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tzR13bSJ9mVvU5314e0cYTLpkquNi-uD=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tzR13bSJ9mVvU5314e0cYTLpkquNi-uD=w1920"
      },
      {
        "id": "13-_TsyzTjwQQsI3HHeg1pDvgoDMmpMg_",
        "title": "Gotbit-11.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/13-_TsyzTjwQQsI3HHeg1pDvgoDMmpMg_=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/13-_TsyzTjwQQsI3HHeg1pDvgoDMmpMg_=w1920"
      },
      {
        "id": "1t2_n9FAa1kOprJCf4mbeFTRGshgh2xXP",
        "title": "Gotbit-12.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1t2_n9FAa1kOprJCf4mbeFTRGshgh2xXP=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1t2_n9FAa1kOprJCf4mbeFTRGshgh2xXP=w1920"
      },
      {
        "id": "1k_N1wiki6ZXrfyq8rpMvkBKDVYVRRVH_",
        "title": "Gotbit-13.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1k_N1wiki6ZXrfyq8rpMvkBKDVYVRRVH_=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1k_N1wiki6ZXrfyq8rpMvkBKDVYVRRVH_=w1920"
      },
      {
        "id": "1ubSsfUpcuLv39woHTlMw7ESK68YwrWKj",
        "title": "Gotbit-14.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ubSsfUpcuLv39woHTlMw7ESK68YwrWKj=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ubSsfUpcuLv39woHTlMw7ESK68YwrWKj=w1920"
      },
      {
        "id": "12b0KeE6FMjSJX4KFhsuBRm_6izDSK1KA",
        "title": "Gotbit-15.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/12b0KeE6FMjSJX4KFhsuBRm_6izDSK1KA=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/12b0KeE6FMjSJX4KFhsuBRm_6izDSK1KA=w1920"
      },
      {
        "id": "1tJ1N7PicxPetXeFT2RX9uA53FutA44Z2",
        "title": "Gotbit-16.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tJ1N7PicxPetXeFT2RX9uA53FutA44Z2=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tJ1N7PicxPetXeFT2RX9uA53FutA44Z2=w1920"
      },
      {
        "id": "1ikcow6SietzuNm2aEawsBvHsJwcvZRHf",
        "title": "Gotbit-17.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ikcow6SietzuNm2aEawsBvHsJwcvZRHf=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ikcow6SietzuNm2aEawsBvHsJwcvZRHf=w1920"
      },
      {
        "id": "1-OrInpNNrL2q1h__79R7QtExcNmLfiWm",
        "title": "Gotbit-18.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1-OrInpNNrL2q1h__79R7QtExcNmLfiWm=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1-OrInpNNrL2q1h__79R7QtExcNmLfiWm=w1920"
      },
      {
        "id": "1crHL1HKSb_dSs1kp3dnvzlh7bZJ1PgL7",
        "title": "Gotbit-19.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1crHL1HKSb_dSs1kp3dnvzlh7bZJ1PgL7=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1crHL1HKSb_dSs1kp3dnvzlh7bZJ1PgL7=w1920"
      },
      {
        "id": "1yx87fL41vIXI6m302ofG0UWzM0CPYCHT",
        "title": "Gotbit-20.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1yx87fL41vIXI6m302ofG0UWzM0CPYCHT=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1yx87fL41vIXI6m302ofG0UWzM0CPYCHT=w1920"
      },
      {
        "id": "1HAVgcuFzuoMP_VyyPvJsgI5HFVlgV2Ee",
        "title": "Gotbit-21.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HAVgcuFzuoMP_VyyPvJsgI5HFVlgV2Ee=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HAVgcuFzuoMP_VyyPvJsgI5HFVlgV2Ee=w1920"
      },
      {
        "id": "1cv0JyN7DN56bAjdVtlaZfUunYdDI3DGh",
        "title": "Gotbit-22.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cv0JyN7DN56bAjdVtlaZfUunYdDI3DGh=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cv0JyN7DN56bAjdVtlaZfUunYdDI3DGh=w1920"
      },
      {
        "id": "1xX2jha4mD9BWhAAUEGooGZx_eVihfR5L",
        "title": "Gotbit-23.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xX2jha4mD9BWhAAUEGooGZx_eVihfR5L=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xX2jha4mD9BWhAAUEGooGZx_eVihfR5L=w1920"
      },
      {
        "id": "1raYyyCa3kAn8TIuCuim2JxES5wDMcyWv",
        "title": "Gotbit-24.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1raYyyCa3kAn8TIuCuim2JxES5wDMcyWv=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1raYyyCa3kAn8TIuCuim2JxES5wDMcyWv=w1920"
      },
      {
        "id": "1nMoT29i1NNF5QTs9QD_oQRdPdv8Zpj4q",
        "title": "Gotbit-25.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nMoT29i1NNF5QTs9QD_oQRdPdv8Zpj4q=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nMoT29i1NNF5QTs9QD_oQRdPdv8Zpj4q=w1920"
      },
      {
        "id": "1wQiinU0kF0vpvmQKT_PuO0f9ZhHvd8Gx",
        "title": "Gotbit-26.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wQiinU0kF0vpvmQKT_PuO0f9ZhHvd8Gx=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wQiinU0kF0vpvmQKT_PuO0f9ZhHvd8Gx=w1920"
      },
      {
        "id": "1Hb2mcL9U1nSQBuN3XDWMvpLjvPrZYCJM",
        "title": "Gotbit-27.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Hb2mcL9U1nSQBuN3XDWMvpLjvPrZYCJM=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Hb2mcL9U1nSQBuN3XDWMvpLjvPrZYCJM=w1920"
      },
      {
        "id": "127U1H90SnC0M4mTNgWIyOHSOBvmvGtoF",
        "title": "Gotbit-28.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/127U1H90SnC0M4mTNgWIyOHSOBvmvGtoF=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/127U1H90SnC0M4mTNgWIyOHSOBvmvGtoF=w1920"
      },
      {
        "id": "1nH4DJQrUxvwDQZwzM8tJcaCAWnayRoXz",
        "title": "Gotbit-29.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nH4DJQrUxvwDQZwzM8tJcaCAWnayRoXz=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nH4DJQrUxvwDQZwzM8tJcaCAWnayRoXz=w1920"
      },
      {
        "id": "1Uy4p9b3GARhIIJnHeeG83iA40p3A0xJD",
        "title": "Gotbit-30.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Uy4p9b3GARhIIJnHeeG83iA40p3A0xJD=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Uy4p9b3GARhIIJnHeeG83iA40p3A0xJD=w1920"
      },
      {
        "id": "1jIhP2EdQjBa2vr-1cO2FetK9C1Yo_EGC",
        "title": "Gotbit-31.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1jIhP2EdQjBa2vr-1cO2FetK9C1Yo_EGC=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1jIhP2EdQjBa2vr-1cO2FetK9C1Yo_EGC=w1920"
      },
      {
        "id": "1I9pD13DusLjKzEM7IL6cRMfW89H3_ibB",
        "title": "Gotbit-32.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1I9pD13DusLjKzEM7IL6cRMfW89H3_ibB=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1I9pD13DusLjKzEM7IL6cRMfW89H3_ibB=w1920"
      },
      {
        "id": "18x75XH4R3NgannjQt5Araoy_AzxARrKj",
        "title": "Gotbit-33.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18x75XH4R3NgannjQt5Araoy_AzxARrKj=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/18x75XH4R3NgannjQt5Araoy_AzxARrKj=w1920"
      },
      {
        "id": "1NRkwwk2wfqE3RdRcwd_-NPMzLeN1j6Td",
        "title": "Gotbit-34.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NRkwwk2wfqE3RdRcwd_-NPMzLeN1j6Td=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NRkwwk2wfqE3RdRcwd_-NPMzLeN1j6Td=w1920"
      },
      {
        "id": "1kz4gLgMEnVURkztU74YlXqk9oJIt321e",
        "title": "Gotbit-35.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1kz4gLgMEnVURkztU74YlXqk9oJIt321e=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1kz4gLgMEnVURkztU74YlXqk9oJIt321e=w1920"
      },
      {
        "id": "1lR6KGtJE1b1Iyb-Z_sthkZo6Mb_u-4XQ",
        "title": "Gotbit-36.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lR6KGtJE1b1Iyb-Z_sthkZo6Mb_u-4XQ=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lR6KGtJE1b1Iyb-Z_sthkZo6Mb_u-4XQ=w1920"
      },
      {
        "id": "1z9Ubdq8UYuuyZedp61YafkQIKlg5LH4j",
        "title": "Gotbit-37.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1z9Ubdq8UYuuyZedp61YafkQIKlg5LH4j=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1z9Ubdq8UYuuyZedp61YafkQIKlg5LH4j=w1920"
      },
      {
        "id": "17Ik0mt26mcVEo4Usyv-_a5IU3yCND3rY",
        "title": "Gotbit-38.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17Ik0mt26mcVEo4Usyv-_a5IU3yCND3rY=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/17Ik0mt26mcVEo4Usyv-_a5IU3yCND3rY=w1920"
      },
      {
        "id": "1ljLvbCzeZAKEw5G1Jy-hpUVy8dFyhvwQ",
        "title": "Gotbit-39.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ljLvbCzeZAKEw5G1Jy-hpUVy8dFyhvwQ=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ljLvbCzeZAKEw5G1Jy-hpUVy8dFyhvwQ=w1920"
      },
      {
        "id": "1lifnPfxK7IkjQB5wwXogg2OKmSGH4hfV",
        "title": "Gotbit-40.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1lifnPfxK7IkjQB5wwXogg2OKmSGH4hfV=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1lifnPfxK7IkjQB5wwXogg2OKmSGH4hfV=w1920"
      },
      {
        "id": "1mtAeiE1YVHOlroLnDgwvHvP5VR4gPSAz",
        "title": "Gotbit-41.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mtAeiE1YVHOlroLnDgwvHvP5VR4gPSAz=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mtAeiE1YVHOlroLnDgwvHvP5VR4gPSAz=w1920"
      },
      {
        "id": "1y45u2Im8OchYLbkisn4mYXEtL6VWAaK_",
        "title": "Gotbit-42.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1y45u2Im8OchYLbkisn4mYXEtL6VWAaK_=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1y45u2Im8OchYLbkisn4mYXEtL6VWAaK_=w1920"
      },
      {
        "id": "1mvjh2xpfZgVjyvpYTCRU9PowgNxRA0qp",
        "title": "Gotbit-43.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1mvjh2xpfZgVjyvpYTCRU9PowgNxRA0qp=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1mvjh2xpfZgVjyvpYTCRU9PowgNxRA0qp=w1920"
      },
      {
        "id": "1drkYQo0I9qGcY12HBs3xpsVwa6kObQ0U",
        "title": "Gotbit-44.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1drkYQo0I9qGcY12HBs3xpsVwa6kObQ0U=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1drkYQo0I9qGcY12HBs3xpsVwa6kObQ0U=w1920"
      },
      {
        "id": "1YJcCeJA7xsyOFRzGYHPHOnAg85jkdDb6",
        "title": "Gotbit-45.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1YJcCeJA7xsyOFRzGYHPHOnAg85jkdDb6=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1YJcCeJA7xsyOFRzGYHPHOnAg85jkdDb6=w1920"
      },
      {
        "id": "1a72EP4o85xxAu-M5-hBifmHE6Ge-DKfU",
        "title": "Gotbit-46.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1a72EP4o85xxAu-M5-hBifmHE6Ge-DKfU=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1a72EP4o85xxAu-M5-hBifmHE6Ge-DKfU=w1920"
      },
      {
        "id": "1FxGaBJ0goHHkzLn7E-o1SImUeh7cZcuI",
        "title": "Gotbit-47.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FxGaBJ0goHHkzLn7E-o1SImUeh7cZcuI=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FxGaBJ0goHHkzLn7E-o1SImUeh7cZcuI=w1920"
      },
      {
        "id": "10gmvxp6xSGCBuTIGrJ7K4hquZUMuAaPw",
        "title": "Gotbit-48.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10gmvxp6xSGCBuTIGrJ7K4hquZUMuAaPw=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/10gmvxp6xSGCBuTIGrJ7K4hquZUMuAaPw=w1920"
      },
      {
        "id": "17jVjkCiSrsyb8tK9u4qPdhQRp9hm8vqV",
        "title": "Gotbit-49.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/17jVjkCiSrsyb8tK9u4qPdhQRp9hm8vqV=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/17jVjkCiSrsyb8tK9u4qPdhQRp9hm8vqV=w1920"
      },
      {
        "id": "1nfuLpVAtfxPCpUg-jXawsoBdG71tOxXk",
        "title": "Gotbit-50.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1nfuLpVAtfxPCpUg-jXawsoBdG71tOxXk=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1nfuLpVAtfxPCpUg-jXawsoBdG71tOxXk=w1920"
      }
    ]
  },
  {
    "id": "photo-sumsub",
    "title": "Sumsub Global Identity & Security Summit",
    "client": "Sumsub Identity Verification",
    "year": "2024",
    "driveFolderUrl": "https://drive.google.com/drive/folders/1RIiUwNIXm6lxr5RZt5WepdFxU5aWC8MS?usp=drive_link",
    "coverImage": "https://lh3.googleusercontent.com/d/1dhn1RsHzsZ33zbeU0h1xjkuki9K5zkO9=w1000",
    "tagline": "High-profile corporate event documentation featuring keynote speakers, interactive tech demo booths, and VIP networking.",
    "photoCount": 50,
    "photos": [
      {
        "id": "1dhn1RsHzsZ33zbeU0h1xjkuki9K5zkO9",
        "title": "Samsub-001.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dhn1RsHzsZ33zbeU0h1xjkuki9K5zkO9=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dhn1RsHzsZ33zbeU0h1xjkuki9K5zkO9=w1920"
      },
      {
        "id": "1Fq2pruti9VGvisLYlKo8gwHmJbXP3bwz",
        "title": "Samsub-002.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Fq2pruti9VGvisLYlKo8gwHmJbXP3bwz=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Fq2pruti9VGvisLYlKo8gwHmJbXP3bwz=w1920"
      },
      {
        "id": "1zKF28BQ-WGULjFpbU4vLs_3JbLjo75i8",
        "title": "Samsub-003.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1zKF28BQ-WGULjFpbU4vLs_3JbLjo75i8=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1zKF28BQ-WGULjFpbU4vLs_3JbLjo75i8=w1920"
      },
      {
        "id": "1W51OKPFQ7uo8zC9TLbVxBA_JWHJzH3PP",
        "title": "Samsub-004.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W51OKPFQ7uo8zC9TLbVxBA_JWHJzH3PP=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W51OKPFQ7uo8zC9TLbVxBA_JWHJzH3PP=w1920"
      },
      {
        "id": "1VLnFT-mY9HOSeyElNwF7jq9YUDTwxtds",
        "title": "Samsub-005.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1VLnFT-mY9HOSeyElNwF7jq9YUDTwxtds=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1VLnFT-mY9HOSeyElNwF7jq9YUDTwxtds=w1920"
      },
      {
        "id": "1RnSL2Z3XYbAae9zgNQqRW-5M353-35uX",
        "title": "Samsub-006.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RnSL2Z3XYbAae9zgNQqRW-5M353-35uX=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RnSL2Z3XYbAae9zgNQqRW-5M353-35uX=w1920"
      },
      {
        "id": "1blpuq-OiI3ag3DS2B6Xy1IAQFCKd7Cn_",
        "title": "Samsub-007.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1blpuq-OiI3ag3DS2B6Xy1IAQFCKd7Cn_=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1blpuq-OiI3ag3DS2B6Xy1IAQFCKd7Cn_=w1920"
      },
      {
        "id": "1riIiUknKWba4Igz74v47VVlRSrPx69mD",
        "title": "Samsub-008.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1riIiUknKWba4Igz74v47VVlRSrPx69mD=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1riIiUknKWba4Igz74v47VVlRSrPx69mD=w1920"
      },
      {
        "id": "1asCVyo2LbJ2wdwhJNxN7b947AQP1sCsO",
        "title": "Samsub-009.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1asCVyo2LbJ2wdwhJNxN7b947AQP1sCsO=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1asCVyo2LbJ2wdwhJNxN7b947AQP1sCsO=w1920"
      },
      {
        "id": "1hxOlg-xXiaZsgzCZq1ig7BtM4toMbaxB",
        "title": "Samsub-010.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hxOlg-xXiaZsgzCZq1ig7BtM4toMbaxB=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hxOlg-xXiaZsgzCZq1ig7BtM4toMbaxB=w1920"
      },
      {
        "id": "10VCFZzC5HFhn6xf3PAUstYHwWPP5w1Xc",
        "title": "Samsub-011.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/10VCFZzC5HFhn6xf3PAUstYHwWPP5w1Xc=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/10VCFZzC5HFhn6xf3PAUstYHwWPP5w1Xc=w1920"
      },
      {
        "id": "1isBZw5UYOVLWNAc7Th487vCzug7HO3qv",
        "title": "Samsub-012.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1isBZw5UYOVLWNAc7Th487vCzug7HO3qv=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1isBZw5UYOVLWNAc7Th487vCzug7HO3qv=w1920"
      },
      {
        "id": "1TN6ATbefn4w38BMG9u-XDtxsyJnsOVQm",
        "title": "Samsub-013.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1TN6ATbefn4w38BMG9u-XDtxsyJnsOVQm=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1TN6ATbefn4w38BMG9u-XDtxsyJnsOVQm=w1920"
      },
      {
        "id": "1iGe-TtfP-du_2BZM6nX1aoOyvO5HAk1G",
        "title": "Samsub-014.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1iGe-TtfP-du_2BZM6nX1aoOyvO5HAk1G=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1iGe-TtfP-du_2BZM6nX1aoOyvO5HAk1G=w1920"
      },
      {
        "id": "15QGmNuwpy8JMOizyAmtZ0rWeJ295KAoK",
        "title": "Samsub-015.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15QGmNuwpy8JMOizyAmtZ0rWeJ295KAoK=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/15QGmNuwpy8JMOizyAmtZ0rWeJ295KAoK=w1920"
      },
      {
        "id": "1FL1Pdg4Qnc5AYzHeTX_C1iOqaPo-pd2Q",
        "title": "Samsub-016.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1FL1Pdg4Qnc5AYzHeTX_C1iOqaPo-pd2Q=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1FL1Pdg4Qnc5AYzHeTX_C1iOqaPo-pd2Q=w1920"
      },
      {
        "id": "1wXSI5pEVlz9RPyfi2vp5br8rO4HqV7c5",
        "title": "Samsub-017.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wXSI5pEVlz9RPyfi2vp5br8rO4HqV7c5=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wXSI5pEVlz9RPyfi2vp5br8rO4HqV7c5=w1920"
      },
      {
        "id": "1P2Va6oct70c7sRH2p14KTNm26XcBn1wd",
        "title": "Samsub-018.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1P2Va6oct70c7sRH2p14KTNm26XcBn1wd=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1P2Va6oct70c7sRH2p14KTNm26XcBn1wd=w1920"
      },
      {
        "id": "1fIOuMKiw5ueb0GELw2g4fviKp9CBixrd",
        "title": "Samsub-019.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1fIOuMKiw5ueb0GELw2g4fviKp9CBixrd=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1fIOuMKiw5ueb0GELw2g4fviKp9CBixrd=w1920"
      },
      {
        "id": "1rvjHJ_-j7Lmnzq4TnHVv_wDKXnMu3xkJ",
        "title": "Samsub-020.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1rvjHJ_-j7Lmnzq4TnHVv_wDKXnMu3xkJ=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1rvjHJ_-j7Lmnzq4TnHVv_wDKXnMu3xkJ=w1920"
      },
      {
        "id": "1tzj1B9o8xtgUI8q-HlggNA-Q3EllJo9o",
        "title": "Samsub-021.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tzj1B9o8xtgUI8q-HlggNA-Q3EllJo9o=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tzj1B9o8xtgUI8q-HlggNA-Q3EllJo9o=w1920"
      },
      {
        "id": "1wVCRxFD7Ch-OsGlYtVmc-duBywfCZq53",
        "title": "Samsub-022.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1wVCRxFD7Ch-OsGlYtVmc-duBywfCZq53=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1wVCRxFD7Ch-OsGlYtVmc-duBywfCZq53=w1920"
      },
      {
        "id": "1i_kziESe1_iN6uqty1R-vMvS05XXA71C",
        "title": "Samsub-023.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1i_kziESe1_iN6uqty1R-vMvS05XXA71C=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1i_kziESe1_iN6uqty1R-vMvS05XXA71C=w1920"
      },
      {
        "id": "1hFoy3eGsejrF96IdD6aRsGfvEAf7DjlC",
        "title": "Samsub-024.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1hFoy3eGsejrF96IdD6aRsGfvEAf7DjlC=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1hFoy3eGsejrF96IdD6aRsGfvEAf7DjlC=w1920"
      },
      {
        "id": "1V3u04UXRWaEixc_hFCGAZkTrLyog9259",
        "title": "Samsub-025.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1V3u04UXRWaEixc_hFCGAZkTrLyog9259=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1V3u04UXRWaEixc_hFCGAZkTrLyog9259=w1920"
      },
      {
        "id": "1Iak25msD6FTxXBxpKFU1oOGODX0nSHzK",
        "title": "Samsub-026.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Iak25msD6FTxXBxpKFU1oOGODX0nSHzK=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Iak25msD6FTxXBxpKFU1oOGODX0nSHzK=w1920"
      },
      {
        "id": "1ocYMUvZQtMQDDRIayBmHMVzx5xl79jq5",
        "title": "Samsub-027.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1ocYMUvZQtMQDDRIayBmHMVzx5xl79jq5=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1ocYMUvZQtMQDDRIayBmHMVzx5xl79jq5=w1920"
      },
      {
        "id": "1oMNhGDgUO5Bhw_Fas60Ji3LNQTNzSJGC",
        "title": "Samsub-028.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oMNhGDgUO5Bhw_Fas60Ji3LNQTNzSJGC=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oMNhGDgUO5Bhw_Fas60Ji3LNQTNzSJGC=w1920"
      },
      {
        "id": "1dWqFw3BGwsAakw1gygE-kO-AdNkMPSER",
        "title": "Samsub-029.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dWqFw3BGwsAakw1gygE-kO-AdNkMPSER=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dWqFw3BGwsAakw1gygE-kO-AdNkMPSER=w1920"
      },
      {
        "id": "1T0BZfaZVrfJRY3PCsAu41yVXI0Y2cJnd",
        "title": "Samsub-030.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T0BZfaZVrfJRY3PCsAu41yVXI0Y2cJnd=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T0BZfaZVrfJRY3PCsAu41yVXI0Y2cJnd=w1920"
      },
      {
        "id": "1W00gbxuiu38MkdW5wcqxAAhEyvWfNHAX",
        "title": "Samsub-031.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1W00gbxuiu38MkdW5wcqxAAhEyvWfNHAX=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1W00gbxuiu38MkdW5wcqxAAhEyvWfNHAX=w1920"
      },
      {
        "id": "18XFp-s6H_qpUnwG43nDxpH3poD7hi4zs",
        "title": "Samsub-032.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/18XFp-s6H_qpUnwG43nDxpH3poD7hi4zs=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/18XFp-s6H_qpUnwG43nDxpH3poD7hi4zs=w1920"
      },
      {
        "id": "1cujUVmxJP_2XJ3jkStOs8nirmsUCqGdb",
        "title": "Samsub-033.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1cujUVmxJP_2XJ3jkStOs8nirmsUCqGdb=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1cujUVmxJP_2XJ3jkStOs8nirmsUCqGdb=w1920"
      },
      {
        "id": "1Jvh63mD1Luqz3F3UmbhL_5AAGGar-ysh",
        "title": "Samsub-034.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Jvh63mD1Luqz3F3UmbhL_5AAGGar-ysh=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Jvh63mD1Luqz3F3UmbhL_5AAGGar-ysh=w1920"
      },
      {
        "id": "1QqhxV3pnGdz7oGs701GOGPkOvLTH2qzK",
        "title": "Samsub-035.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1QqhxV3pnGdz7oGs701GOGPkOvLTH2qzK=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1QqhxV3pnGdz7oGs701GOGPkOvLTH2qzK=w1920"
      },
      {
        "id": "1Yi_q5Ft7kMFdebjLORYZhXyLRBvP5cJF",
        "title": "Samsub-036.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Yi_q5Ft7kMFdebjLORYZhXyLRBvP5cJF=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Yi_q5Ft7kMFdebjLORYZhXyLRBvP5cJF=w1920"
      },
      {
        "id": "1T2R8wl2Qlmc0_E_FHL-9xU4pJ1tu75JM",
        "title": "Samsub-037.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1T2R8wl2Qlmc0_E_FHL-9xU4pJ1tu75JM=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1T2R8wl2Qlmc0_E_FHL-9xU4pJ1tu75JM=w1920"
      },
      {
        "id": "1dswqbQS_gM0YjYqARel5Gfl_mU1_R-ws",
        "title": "Samsub-038.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1dswqbQS_gM0YjYqARel5Gfl_mU1_R-ws=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1dswqbQS_gM0YjYqARel5Gfl_mU1_R-ws=w1920"
      },
      {
        "id": "1aRIGAzNBVwAWhKD4e9VjUnrCz0iG6KEx",
        "title": "Samsub-039.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1aRIGAzNBVwAWhKD4e9VjUnrCz0iG6KEx=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1aRIGAzNBVwAWhKD4e9VjUnrCz0iG6KEx=w1920"
      },
      {
        "id": "15p6Fdsl6-y8Qk5G8LmuZXxQWBF541lVE",
        "title": "Samsub-040.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/15p6Fdsl6-y8Qk5G8LmuZXxQWBF541lVE=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/15p6Fdsl6-y8Qk5G8LmuZXxQWBF541lVE=w1920"
      },
      {
        "id": "1w6RvNQKo8uf9b7sPbP9Yx0wF9kJCxvrO",
        "title": "Samsub-041.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1w6RvNQKo8uf9b7sPbP9Yx0wF9kJCxvrO=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1w6RvNQKo8uf9b7sPbP9Yx0wF9kJCxvrO=w1920"
      },
      {
        "id": "1HqYQMDaRbaoIh2hsvtBFVlfsi8In1h1j",
        "title": "Samsub-042.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1HqYQMDaRbaoIh2hsvtBFVlfsi8In1h1j=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1HqYQMDaRbaoIh2hsvtBFVlfsi8In1h1j=w1920"
      },
      {
        "id": "1tACH7bk5aHIDgW1Wu5Cyp1WglcS0QgaC",
        "title": "Samsub-043.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tACH7bk5aHIDgW1Wu5Cyp1WglcS0QgaC=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tACH7bk5aHIDgW1Wu5Cyp1WglcS0QgaC=w1920"
      },
      {
        "id": "1xb81jvZOt90LDyl9tOsUC9Jn7h3JnIxk",
        "title": "Samsub-044.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1xb81jvZOt90LDyl9tOsUC9Jn7h3JnIxk=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1xb81jvZOt90LDyl9tOsUC9Jn7h3JnIxk=w1920"
      },
      {
        "id": "1Ftr5_swk1I8gjOjkTPdoXt_1z-MwZyVa",
        "title": "Samsub-045.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1Ftr5_swk1I8gjOjkTPdoXt_1z-MwZyVa=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1Ftr5_swk1I8gjOjkTPdoXt_1z-MwZyVa=w1920"
      },
      {
        "id": "1RRRU4UMH9GypUyaFc1Eq0X1A9hEtyepk",
        "title": "Samsub-046.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1RRRU4UMH9GypUyaFc1Eq0X1A9hEtyepk=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1RRRU4UMH9GypUyaFc1Eq0X1A9hEtyepk=w1920"
      },
      {
        "id": "1tGX0dTqUMlIuDnyvj6xJjhUx7VvtNShI",
        "title": "Samsub-047.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1tGX0dTqUMlIuDnyvj6xJjhUx7VvtNShI=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1tGX0dTqUMlIuDnyvj6xJjhUx7VvtNShI=w1920"
      },
      {
        "id": "1NmZ_90C3BiceP8meEhfboelYeTnO3wqM",
        "title": "Samsub-048.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1NmZ_90C3BiceP8meEhfboelYeTnO3wqM=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1NmZ_90C3BiceP8meEhfboelYeTnO3wqM=w1920"
      },
      {
        "id": "1DeNDTULnhZz_Jm74czkP-06A0DBwiiEi",
        "title": "Samsub-049.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1DeNDTULnhZz_Jm74czkP-06A0DBwiiEi=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1DeNDTULnhZz_Jm74czkP-06A0DBwiiEi=w1920"
      },
      {
        "id": "1oW6Hnklzg7hu2ftvZORmHKW6Gkxwfgi8",
        "title": "Samsub-050.jpg",
        "thumbUrl": "https://lh3.googleusercontent.com/d/1oW6Hnklzg7hu2ftvZORmHKW6Gkxwfgi8=w600",
        "fullUrl": "https://lh3.googleusercontent.com/d/1oW6Hnklzg7hu2ftvZORmHKW6Gkxwfgi8=w1920"
      }
    ]
  }
];

export const videoCategories = [
  { id: 'all', label: 'All Videos' },
  { id: 'ai-videos', label: 'AI Videos' },
  { id: 'brand-story', label: 'Brand Stories' },
  { id: 'events', label: 'Events & Promos' },
  { id: 'panel-discussions', label: 'Panel Discussions' },
  { id: 'product-service', label: 'Product & Service' },
  { id: 'interviews-docs', label: 'Interviews & Docs' },
  { id: 'testimonials', label: 'Testimonials' },
];
