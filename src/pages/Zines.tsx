import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/MainFooter";
import BrandName from "@/components/BrandName";

const zines = [
  {
    title: "Cayuga - Week 1 & 2",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/19f4ebbb-705e-48b4-8774-945e5f5bec43/Cayuga+-+Week+1+%26+2+-+2023_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/19f4ebbb-705e-48b4-8774-945e5f5bec43/Cayuga+-+Week+1+%26+2+-+2023_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/47350a66-fe3c-4a56-80c0-383cc1a76515/Cayuga+-+Week+1+%26+2+-+2023_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1cb2294e-82af-40fe-8d45-92ddbfcdb2f4/Cayuga+-+Week+1+%26+2+-+2023_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ef16197c-bf00-43de-86d8-bb0510c9b16f/Cayuga+-+Week+1+%26+2+-+2023_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/690ac28e-044d-4fd2-a943-af8798c4e432/Cayuga+-+Week+1+%26+2+-+2023_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d47b2735-0e1c-4bad-ad4a-7a20c1d2d50b/Cayuga+-+Week+1+%26+2+-+2023_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f9b6c64a-e5c4-4fcc-b526-853c699b89f4/Cayuga+-+Week+1+%26+2+-+2023_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3c5ac8be-7031-4cdb-9496-78772b8e6fea/Cayuga+-+Week+1+%26+2+-+2023_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8a1b5432-d1da-4501-96e5-d1976b889396/Cayuga+-+Week+1+%26+2+-+2023_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/41d79a2c-26b4-4f4f-bcce-37ded3e3d5eb/Cayuga+-+Week+1+%26+2+-+2023_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/131d3fb4-ff3e-47bb-9341-b2e9c29a3d41/Cayuga+-+Week+1+%26+2+-+2023_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5029cb12-ac79-4034-9226-4f4413158eb8/Cayuga+-+Week+1+%26+2+-+2023_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/70e8b99a-0298-483b-a218-fdf77e56ba6e/Cayuga+-+Week+1+%26+2+-+2023_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/50282532-f2b1-4360-9084-d646ed813f51/Cayuga+-+Week+1+%26+2+-+2023_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8b7a1c9c-b467-49fa-9fd7-ff409c6797e3/Cayuga+-+Week+1+%26+2+-+2023_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0c19dc83-afa2-4d1e-a5f5-297f3e9aeccc/Cayuga+-+Week+1+%26+2+-+2023_00016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1bfe6132-3143-427a-b702-551053814c98/Cayuga+-+Week+1+%26+2+-+2023_00017.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7ed79add-abcc-4f56-8857-b3eb9cb2ac71/Cayuga+-+Week+1+%26+2+-+2023_00018.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bcd74635-45db-4b8c-a3ec-9721a45689b8/Cayuga+-+Week+1+%26+2+-+2023_00019.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/63fc5d2b-2fe8-4fd6-8e38-8f13963b9bea/Cayuga+-+Week+1+%26+2+-+2023_00020.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/143fa4e7-bfbb-4f96-b600-1dc088f9ec83/Cayuga+-+Week+1+%26+2+-+2023_00021.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1a7088db-ace4-4a94-9ebf-f2fef03a51a7/Cayuga+-+Week+1+%26+2+-+2023_00022.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8d5ccf29-7461-44aa-be42-a0b2bea22456/Cayuga+-+Week+1+%26+2+-+2023_00023.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7668992b-5458-4de5-9a97-fc6d7d868f00/Cayuga+-+Week+1+%26+2+-+2023_00024.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/48adf662-02db-4a86-8a21-f28d8e953704/Cayuga+-+Week+1+%26+2+-+2023_00025.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/eafe78dd-57d0-4727-b87f-11797cbd4219/Cayuga+-+Week+1+%26+2+-+2023_00026.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e0716aa7-989b-4c1f-a4a1-226da09b99f4/Cayuga+-+Week+1+%26+2+-+2023_00027.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e9b457bd-5209-4a04-abf5-a1c95c8f9179/Cayuga+-+Week+1+%26+2+-+2023_00028.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5246dece-a7a5-4d2d-b063-57db95a2e3bc/Cayuga+-+Week+1+%26+2+-+2023_00029.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8dcabb20-1f18-497f-aa60-b5153831b388/Cayuga+-+Week+1+%26+2+-+2023_00030.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0d0de91c-3b53-49ef-b85f-181276ef02ec/Cayuga+-+Week+1+%26+2+-+2023_00031.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a31c137f-9d78-4d7c-ba34-9945278e7850/Cayuga+-+Week+1+%26+2+-+2023_00032.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5a86d40a-3ca2-4b5e-8574-e97f3ddbe62a/Cayuga+-+Week+1+%26+2+-+2023_00033.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e5b52567-5621-4d77-ade4-e551862abb7c/Cayuga+-+Week+1+%26+2+-+2023_00034.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d9a02b7d-852e-4790-bbc9-4e1ff6ee53f1/Cayuga+-+Week+1+%26+2+-+2023_00035.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2c5626d1-eb27-4d5e-97ae-fa2bb3280505/Cayuga+-+Week+1+%26+2+-+2023_00036.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/71853bf7-9a9e-4c7b-8a52-03897843ba37/Cayuga+-+Week+1+%26+2+-+2023_00037.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e85a75c8-a29e-49d8-aacb-a30e083aeb8a/Cayuga+-+Week+1+%26+2+-+2023_00038.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/17d87858-9f49-4784-b363-d0060d35dc2b/Cayuga+-+Week+1+%26+2+-+2023_00039.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/29d5e956-e94b-4a46-9c13-c1cec1916325/Cayuga+-+Week+1+%26+2+-+2023_00040.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9d0c40a5-e580-4f83-b422-dfa2d0071cb6/Cayuga+-+Week+1+%26+2+-+2023_00041.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5715c73d-66fc-4c1c-8ea2-912010fd3b05/Cayuga+-+Week+1+%26+2+-+2023_00042.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1849a79f-9423-4b4a-b8de-2c14cbd228a7/Cayuga+-+Week+1+%26+2+-+2023_00043.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5864c215-45d4-469f-8b14-81ee86b194b0/Cayuga+-+Week+1+%26+2+-+2023_00044.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9836def1-911b-4176-9275-5db31523d6d2/Cayuga+-+Week+1+%26+2+-+2023_00045.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/725d21dd-0e10-4e4a-9be9-b3c31267d37c/Cayuga+-+Week+1+%26+2+-+2023_00046.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2929eeb5-acfb-4d05-9f2d-607428bb2d8e/Cayuga+-+Week+1+%26+2+-+2023_00047.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bdcf8c65-9b3a-428c-a959-2b858294b4db/Cayuga+-+Week+1+%26+2+-+2023_00048.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/accd77a2-23ba-4c51-9c3f-f2c868cf0847/Cayuga+-+Week+1+%26+2+-+2023_00049.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e7085e3b-7ccd-4afe-976a-bde3362506de/Cayuga+-+Week+1+%26+2+-+2023_00050.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7c6ea93d-9709-4fc4-889e-a97f3b4bfa2e/Cayuga+-+Week+1+%26+2+-+2023_00051.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6ec4352c-01ed-4655-a887-25acffa439d8/Cayuga+-+Week+1+%26+2+-+2023_00052.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f3d60a68-dd46-4b47-993b-8a2a45674668/Cayuga+-+Week+1+%26+2+-+2023_00053.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e6e10bdd-43d1-4294-8bc7-8c74b9952bd7/Cayuga+-+Week+1+%26+2+-+2023_00054.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c53bf42f-479a-4cf9-8fe8-fd728c164b7e/Cayuga+-+Week+1+%26+2+-+2023_00055.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c30d9777-1784-4036-95d3-447cd50c235c/Cayuga+-+Week+1+%26+2+-+2023_00056.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cc9bf80d-c352-45f5-bb02-174d136d6178/Cayuga+-+Week+1+%26+2+-+2023_00057.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/13c7ee6b-8c8e-49ab-90fb-840225e9ebce/Cayuga+-+Week+1+%26+2+-+2023_00058.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ca8c569f-9ebb-4d33-ba96-87ca6d924f4a/Cayuga+-+Week+1+%26+2+-+2023_00059.jpg"
    ],
  },
  {
    title: "Cayuga - Zine Issue 003",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/54ca79a9-07e6-4934-aff6-d06f7aeb808e/Cayuga+-+Zine+Issue+003_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/54ca79a9-07e6-4934-aff6-d06f7aeb808e/Cayuga+-+Zine+Issue+003_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/82de06fe-7806-4f3b-99b1-312f373ceb65/Cayuga+-+Zine+Issue+003_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7886bfe9-500d-4cd2-941f-649eb40f8f74/Cayuga+-+Zine+Issue+003_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4e9b8323-833a-4521-be3e-52dea2ff9364/Cayuga+-+Zine+Issue+003_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d6acc902-9d4d-4cff-88ac-24a410ae5c30/Cayuga+-+Zine+Issue+003_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/74cfa28c-f757-4e43-83ff-53ec5e50fe02/Cayuga+-+Zine+Issue+003_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1f04a1a4-d66f-42df-9250-36fdde9bef28/Cayuga+-+Zine+Issue+003_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8c71e5ba-b7db-499a-baa8-14ec5206c62a/Cayuga+-+Zine+Issue+003_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8b37fe75-2140-401f-896e-1ce35a092272/Cayuga+-+Zine+Issue+003_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/828bf44b-a2c5-46d8-b7bc-5201fb3802b3/Cayuga+-+Zine+Issue+003_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/fb53b689-7d42-44b0-a834-1508c0652713/Cayuga+-+Zine+Issue+003_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6ffef35f-7a6d-4d39-9c48-dd56059631c1/Cayuga+-+Zine+Issue+003_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/081ddfda-e91c-409a-a97a-55182c22ec3d/Cayuga+-+Zine+Issue+003_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7e283f8f-5572-4bd3-81ac-600c443a09b9/Cayuga+-+Zine+Issue+003_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7fbfe190-a9b3-465b-b200-625aebb346e9/Cayuga+-+Zine+Issue+003_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1392cd53-6a31-43a4-9353-c9cd0472e3d5/Cayuga+-+Zine+Issue+003_00016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a2c539b8-7f00-4aa1-b9cd-1eba806dbb8c/Cayuga+-+Zine+Issue+003_00017.jpg"
    ],
  },
  {
    title: "Cayuga - Zine Issue 004",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e7156d12-ba37-4b18-b60f-f81c75790e10/Cayuga+-+Zine+Issue+004_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e7156d12-ba37-4b18-b60f-f81c75790e10/Cayuga+-+Zine+Issue+004_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/84a7bbca-7fbf-4e49-a37d-fcf1fb8157e8/Cayuga+-+Zine+Issue+004_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/dcd5b872-ba5a-4898-9240-eba315c546a8/Cayuga+-+Zine+Issue+004_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e20139f8-f584-4871-a551-ab9f4fe07cb8/Cayuga+-+Zine+Issue+004_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ca464109-7fb2-40df-9ed0-40b6e63205b3/Cayuga+-+Zine+Issue+004_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/44b963e8-fcd6-4632-ae32-c46f4c171af4/Cayuga+-+Zine+Issue+004_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/af982157-9fb8-4baf-a5d5-e488c094a407/Cayuga+-+Zine+Issue+004_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1e145232-2f30-493e-a594-55d7a7c61fb1/Cayuga+-+Zine+Issue+004_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b73e7ae2-2420-469b-a34b-5a56119e57cb/Cayuga+-+Zine+Issue+004_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/28b7b3da-ba3a-414d-b1a1-06ab277e411f/Cayuga+-+Zine+Issue+004_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/87b21b25-672a-46ec-9269-9874b83578ff/Cayuga+-+Zine+Issue+004_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0222e1ba-3cb1-409d-90a7-5a7786c54e3f/Cayuga+-+Zine+Issue+004_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9d9e65f5-d6cf-41aa-bbbe-4e6ee58fd3eb/Cayuga+-+Zine+Issue+004_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a88100ed-0869-467d-ad44-0a2a1102e064/Cayuga+-+Zine+Issue+004_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3af9b890-31ea-404d-afb3-be20c1a8ed8a/Cayuga+-+Zine+Issue+004_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/97146463-3ea1-4e5a-8702-cce537838654/Cayuga+-+Zine+Issue+004_00016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/30ee2bb7-440a-402a-b614-7423ccec0e4d/Cayuga+-+Zine+Issue+004_00017.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/86d77a20-0538-44bf-98cc-60504373fb69/Cayuga+-+Zine+Issue+004_00018.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ac060182-e245-4ffc-bb73-f32a1dac6495/Cayuga+-+Zine+Issue+004_00019.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d683ce33-28c1-4a83-b42b-28c56f3c464d/Cayuga+-+Zine+Issue+004_00020.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f3ac40f1-b868-4f69-8fdd-05c15810c38a/Cayuga+-+Zine+Issue+004_00021.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/965dbfe3-1c82-4383-acca-44200a096d65/Cayuga+-+Zine+Issue+004_00022.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cc4c366f-3b79-40c9-8b01-75428982485c/Cayuga+-+Zine+Issue+004_00023.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0df3e797-d4de-4361-b0c7-dca3d1034ad1/Cayuga+-+Zine+Issue+004_00024.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e5c3062c-199a-4bd1-b836-920f541be79c/Cayuga+-+Zine+Issue+004_00025.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b2f652c5-0162-4437-9091-b1d060c07ab9/Cayuga+-+Zine+Issue+004_00026.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a33eb4e8-9956-491b-b447-dd05fb39763a/Cayuga+-+Zine+Issue+004_00027.jpg"
    ],
  },
  {
    title: "Cayuga - Zine Issue 005",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3a243211-061f-4968-8292-4f9476e52513/Cayuga+-+Zine+Issue+005_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3a243211-061f-4968-8292-4f9476e52513/Cayuga+-+Zine+Issue+005_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/681b8f41-7d65-4f70-8cc1-eefbf771d966/Cayuga+-+Zine+Issue+005_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1496ae90-dceb-491d-be78-22a2651d5586/Cayuga+-+Zine+Issue+005_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/24333654-6310-4f43-a756-3cf25b724392/Cayuga+-+Zine+Issue+005_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/144ee4c6-0aa7-424e-9fbb-430d2479f1f7/Cayuga+-+Zine+Issue+005_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c8815f8f-773a-430f-9962-c050f4edddff/Cayuga+-+Zine+Issue+005_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b1ff3ba6-8f15-45b0-bce9-3a2781705970/Cayuga+-+Zine+Issue+005_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8846e3d1-6c63-4d16-9eeb-7a0f5be75536/Cayuga+-+Zine+Issue+005_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b487b42b-1473-49d8-86df-d1445c837d53/Cayuga+-+Zine+Issue+005_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f03be6d6-85b5-4c47-8d13-05518eb69083/Cayuga+-+Zine+Issue+005_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/20823fd9-be4a-4d65-9c99-2ba08c364f94/Cayuga+-+Zine+Issue+005_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c357b2ac-8a90-453d-9cf8-30c27fec7a25/Cayuga+-+Zine+Issue+005_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4539d41c-9df9-432a-83a6-c6fec8ce6b88/Cayuga+-+Zine+Issue+005_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8a593b1d-8c38-4242-a372-d604b0f10442/Cayuga+-+Zine+Issue+005_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5e1f3aa9-acf0-470e-9593-abe6fdc0b48e/Cayuga+-+Zine+Issue+005_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9e2a53fb-a2bf-46fe-991a-36edfc40f46b/Cayuga+-+Zine+Issue+005_00016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9e8ad1d3-7a19-437c-b70a-bed6621acdad/Cayuga+-+Zine+Issue+005_00017.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ff75ce44-de06-4620-a310-04d55fd7242c/Cayuga+-+Zine+Issue+005_00018.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/49f2426f-4aac-44cb-b89c-570ccd41f385/Cayuga+-+Zine+Issue+005_00019.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/79eacd2c-e2f0-484f-b8a6-d2816a3f509d/Cayuga+-+Zine+Issue+005_00020.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f159e903-7957-4fff-8ac5-5369b2e82595/Cayuga+-+Zine+Issue+005_00021.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e62611c4-792c-4a59-bf65-f57ac3a5e38f/Cayuga+-+Zine+Issue+005_00022.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/541631f8-4b8c-4f37-92f2-071b82b7fa9c/Cayuga+-+Zine+Issue+005_00023.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b39c56e0-cf32-4d38-9545-bb8efbbc136d/Cayuga+-+Zine+Issue+005_00024.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/06b3ce1d-841e-41a2-9aa0-24689db8c57b/Cayuga+-+Zine+Issue+005_00025.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cac2d99b-d7ab-4d15-a00d-c701817a7507/Cayuga+-+Zine+Issue+005_00026.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f7c9504b-8642-4f3b-83a1-5a3fed381d6d/Cayuga+-+Zine+Issue+005_00027.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e8380085-9853-4a05-95f6-3decb4346370/Cayuga+-+Zine+Issue+005_00028.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5592d894-70ec-4a7e-b648-6bed33ed354b/Cayuga+-+Zine+Issue+005_00029.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e1afc7bc-120d-42ff-87b5-d1a0b221b3da/Cayuga+-+Zine+Issue+005_00030.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/81931c17-7d91-4b0d-b0ad-074497d6bea5/Cayuga+-+Zine+Issue+005_00031.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5a7c3278-18d7-4ca2-9d36-94b6efaf5b1d/Cayuga+-+Zine+Issue+005_00032.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a75f700d-c39c-4633-aaef-026db19b101b/Cayuga+-+Zine+Issue+005_00033.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d6b97ff1-c09f-466e-b9cf-7e001df16e47/Cayuga+-+Zine+Issue+005_00034.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/655e4423-5675-4107-aef3-9332e7cf2519/Cayuga+-+Zine+Issue+005_00035.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3ecccb25-488b-489e-b7ac-a630b7593fb9/Cayuga+-+Zine+Issue+005_00036.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/86721dc8-1419-4615-90c4-6eaeec273251/Cayuga+-+Zine+Issue+005_00037.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/028cf53e-2393-4b4a-b8c6-948625593861/Cayuga+-+Zine+Issue+005_00038.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/dce66496-4a95-4a48-920f-1c3599689fa5/Cayuga+-+Zine+Issue+005_00039.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/38bc5a3f-c6cf-437b-9e95-f5f582396977/Cayuga+-+Zine+Issue+005_00040.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cde3c1e7-12eb-473b-ab74-ddd7835e9819/Cayuga+-+Zine+Issue+005_00041.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b284bb88-f7e8-4eb4-8d3c-df6beca18e56/Cayuga+-+Zine+Issue+005_00042.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/973efbf1-3fcc-4c3d-9b2b-290f277cacec/Cayuga+-+Zine+Issue+005_00043.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9d4640b7-dc6a-4b70-9932-590e8fe0c2f2/Cayuga+-+Zine+Issue+005_00044.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f4a1a968-89f4-48f9-817b-5411a52e5741/Cayuga+-+Zine+Issue+005_00045.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bb0ed081-74d1-4c1e-b4cf-8ade98b433e0/Cayuga+-+Zine+Issue+005_00046.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b797a50d-e941-466c-9cfe-e7534e4122c3/Cayuga+-+Zine+Issue+005_00047.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c3c2172a-8cb2-4c03-ae09-fcb13687b5af/Cayuga+-+Zine+Issue+005_00048.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/82696b62-e943-42d5-828c-5ff3df642941/Cayuga+-+Zine+Issue+005_00049.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/03f887d6-2a3b-4b1e-9845-8250759edf13/Cayuga+-+Zine+Issue+005_00050.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e8a3b569-4dd7-4544-a9c9-e64a9fb73355/Cayuga+-+Zine+Issue+005_00051.jpg"
    ],
  },
  {
    title: "Elisabeth Morrow Winter",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7e6f8c0b-57a2-4e60-83ad-40c79c528dbe/Elisabeth+Morrow+Winter+2023+Zine+_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7e6f8c0b-57a2-4e60-83ad-40c79c528dbe/Elisabeth+Morrow+Winter+2023+Zine+_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ea5176ee-0b10-4690-9972-eb4ef4e65fd9/1.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/aa31f555-d626-48ff-a506-06f01b9e5d39/2.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4bf2b9a0-3f7a-4f03-9b27-933fa66b1e7b/3.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b377ad44-a045-4f16-a170-4c1f49a48564/4.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cd069949-9403-4ef7-8401-7cfc537f0709/5.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/72a89d85-ba4b-4a4d-8e46-cf9e72af6e6f/6.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b1bb7119-f8d9-4b5e-b490-ad8741fa8295/7.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2d259f9c-85ad-4f1c-ba24-424167c87c95/8.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4460dfa3-c202-4faf-a3c6-fef04c89708e/9.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/523a3800-859c-41e4-a135-f07ee7a0523d/10.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8404f8a3-19bf-443e-b15b-a7472a9a4e40/11.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4d76dffd-10e2-4a5e-9b74-05238d8242dc/12.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/59ab7d31-0c38-452a-955b-cb85270e1de7/13.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/542e3db5-2d8a-4c3e-9de0-c2298add19f4/14.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7e1a8c13-e492-4c9e-8135-5c648ee37bfa/15.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/705f9a52-80e9-48b2-a0a7-8bf532494db6/16.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0ec4132d-3f62-4b85-b358-725211bd26da/17.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5986111e-11d8-4c5f-87d9-80904a47345d/18.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/64559c81-4aa7-41e5-b687-d90a6dc5c747/19.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/591e439c-4751-44fa-8d53-b2e41bbf118a/20.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a1d48195-5ba3-427d-86d7-a95f1c92b76f/21.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1c523aed-4610-431b-be05-c7a710cbc53e/22.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/917db402-d90b-4b6b-b421-82221e98f59d/23.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a54a05bc-5fe0-4ac0-94c0-353946eb1f09/24.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ba57d086-dfb3-4856-bb93-867c4cdd9f6d/25.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9e14c814-1506-4273-8166-f31f2a5f1197/26.jpg"
    ],
  },
  {
    title: "French Spring",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7b949d6d-6221-47f8-80d4-55423059ac7e/French+Spring+2023+-+Origin+Stories_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7b949d6d-6221-47f8-80d4-55423059ac7e/French+Spring+2023+-+Origin+Stories_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e028856c-4aaf-4c24-8918-38d34758b721/French+Spring+2023+-+Origin+Stories_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ae87e9d5-a068-4103-9d39-58d186b73aef/French+Spring+2023+-+Origin+Stories_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/09fe303a-6556-426c-8224-4370514d7158/French+Spring+2023+-+Origin+Stories_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/70ad8da0-adad-434d-a892-c1f841d2523f/French+Spring+2023+-+Origin+Stories_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0ddfc2e1-e5ab-44c2-8ce5-a35bc0755623/French+Spring+2023+-+Origin+Stories_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c9e8f516-b912-48f9-a48c-004d5b28636b/French+Spring+2023+-+Origin+Stories_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/26e6020e-8abc-4bcd-b105-8ca2692392c7/French+Spring+2023+-+Origin+Stories_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/11ec241a-c716-4e3a-bc40-827dd676e1ca/French+Spring+2023+-+Origin+Stories_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/485da495-ef83-4412-9e78-b5eb2ca08e43/French+Spring+2023+-+Origin+Stories_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b49a6767-68d4-4f17-a683-4b051ba27ada/French+Spring+2023+-+Origin+Stories_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e571f889-a59f-488a-8524-ea5be9cd2ffc/French+Spring+2023+-+Origin+Stories_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/71adce73-100f-44bd-bf99-1fa8d215c6be/French+Spring+2023+-+Origin+Stories_00013.jpg"
    ],
  },
  {
    title: "Haworth Winter 1",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a917fcb8-6249-463d-8166-c5f625dceccb/Haworth+Winter+2023+Zine+_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a917fcb8-6249-463d-8166-c5f625dceccb/Haworth+Winter+2023+Zine+_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/dddf24a1-f69b-4dbb-8be8-1be9243d9adb/1.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/aa4da7de-ff9f-4448-bcbb-9fbc487943b2/2.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/abd129ec-469f-4fbc-bb01-64cea9803b64/3.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0a6fce25-78c3-42f5-bec0-b613245c4a8a/4.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7a7923d5-4118-4a0d-b944-8a50c5f26d96/5.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ea70b9c5-7f48-4a14-a705-778b6b01c6a3/6.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b6344131-b83c-491f-ab85-3b884bcdbe9c/7.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f45475e9-4e6b-499b-b5ca-cd0c28dde958/8.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/476af130-b1cd-48ba-ac15-0a58bba7973a/9.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3664b178-dcc9-40a9-b53a-899b58f62fb7/10.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/84e62609-6024-4e5a-bef2-2c9f144846bc/11.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d892541d-c01a-4bf8-9a2b-dd977b560eea/12.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7cf345da-d84c-4808-adba-8db41ba6d1db/13.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2b99d8c6-98cc-4eaa-b5aa-c36b839e029f/14.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/22694664-21e2-4641-87ce-ac046db743cd/15.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a58c6da9-a19e-4bd6-9885-504e5e4bd499/16.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8e2ec4a1-7639-442a-b32d-9fb13cdd9646/17.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9c54becf-0b8f-41d0-950f-7d6f0b5d0324/18.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ae316ccf-a065-4036-9b8c-6e8b220e8169/19.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1f407142-0df5-4c4e-bb52-ecba945846bb/20.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a4e32dfb-30a6-47e6-a6bb-28af65d8d198/21.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4f266331-0329-45fb-9347-fe1ffbe54a5c/22.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/88f23c81-ae86-44bd-a166-5036b9875d24/23.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4539ccb8-3876-4c9f-bde0-4e3085af9a28/24.jpg"
    ],
  },
  {
    title: "Haworth Winter 2",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f45a71e2-3aca-445a-92f1-64a9f97d73b9/Haworth+Spring+2023+-+Origin+Stories_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f45a71e2-3aca-445a-92f1-64a9f97d73b9/Haworth+Spring+2023+-+Origin+Stories_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/19ec22f0-65fe-4a68-a8f0-109fd107b96f/Haworth+Spring+2023+-+Origin+Stories_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/dee71ba4-49d8-4863-8d51-2bbb963841bc/Haworth+Spring+2023+-+Origin+Stories_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c042b3b0-634f-457e-bda7-79806f647d17/Haworth+Spring+2023+-+Origin+Stories_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/75078270-f263-471f-b42b-2e34e29d6e71/Haworth+Spring+2023+-+Origin+Stories_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/616031e6-c8f3-43b9-b419-101d4eed1ae1/Haworth+Spring+2023+-+Origin+Stories_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ff74176d-0c4f-494e-b369-17b4bb55ad3e/Haworth+Spring+2023+-+Origin+Stories_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bf5b144e-c6e0-4a10-a554-b79604c38aa0/Haworth+Spring+2023+-+Origin+Stories_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/234ed290-992c-42d8-9fb8-76b0e5cabe53/Haworth+Spring+2023+-+Origin+Stories_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e1ac992d-1cb6-40a8-a075-0f9d00a8afb7/Haworth+Spring+2023+-+Origin+Stories_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b800225c-de89-4806-913e-8eb38f5b9155/Haworth+Spring+2023+-+Origin+Stories_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d4d97a10-3df3-41aa-93bb-56187bede6b8/Haworth+Spring+2023+-+Origin+Stories_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9c6d66bd-c3dd-45ae-8c0e-3146319d4800/Haworth+Spring+2023+-+Origin+Stories_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/49db6bfc-6734-4c81-9ba4-1c9788d6f54d/Haworth+Spring+2023+-+Origin+Stories_00014.jpg"
    ],
  },
  {
    title: "Orchard Winter 1",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/494c3f3b-521f-49ca-bbad-fbc08dab66e3/Orchard+Winter+2023+Zine+-1.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/494c3f3b-521f-49ca-bbad-fbc08dab66e3/Orchard+Winter+2023+Zine+-1.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/588774ff-3cc4-43a2-8850-7b55b5a47195/ewm_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/27cf8ad9-937e-4b64-b494-36167ed8729c/ewm_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/558ea37d-f1b3-44ed-8ecc-c713b81477c9/ewm_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d69107b8-e382-41b1-87b1-4c358344bf01/ewm_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/39edb623-09b5-4589-9e88-0e89b4012cf2/ewm_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/490401da-ae7f-4639-8258-452838d5dcbe/ewm_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ecdec8d0-aa88-4563-bee2-9c2585539089/ewm_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/27aafd33-5796-4a8f-9f88-e21a375ef2ae/ewm_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/20209f19-c773-45ef-bfa2-5df3d36c7353/ewm_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/83acaedb-852b-4132-888d-66351b30b958/ewm_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/98dd5591-9fb6-4a66-9f63-a587f1066929/ewm_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bedbed61-099c-4a16-8890-7be6466896d2/ewm_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/761cb484-b55e-45a9-b5fa-9c73b6192be1/ewm_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0510019d-0c87-46b6-9256-6ff05d62a791/ewm_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5fef6fb6-6110-481f-b5d9-fb52db88cda1/ewm_00016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e0a3241b-949b-471b-b312-ad1736288c9e/ewm_00017.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/77089190-7563-4dcd-886d-f98c1ad7f936/ewm_00018.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/37f2fc44-52a8-497c-962e-97461173a0cb/ewm_00019.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/45cd81d1-5661-42e2-b5de-35f215039921/ewm_00020.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/62b9b81e-6259-479b-b7c0-08e388a06856/ewm_00021.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2899cb3e-520b-46b1-9af1-5c9b96bad22c/ewm_00022.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/33175a09-2cd1-4916-8ac6-712825f87335/ewm_00023.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/45b35172-a1a4-43da-8713-865ed3b62579/ewm_00024.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7613398b-d845-4fc3-9eff-a315395a3cb4/ewm_00025.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cf0ebaba-543d-4107-803f-9da9ac56546e/ewm_00026.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e6941bad-212d-4660-9e41-e71a003c278f/ewm_00027.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5df72e4b-e219-430e-a323-d2cea085055e/ewm_00028.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9ff6e240-00a2-4c21-81df-b3af38d40261/ewm_00029.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b65ff7ac-11a9-4423-9ef2-d146efdbad00/ewm_00030.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/61b3b286-1c12-45b9-9163-9abf93a36c85/ewm_00031.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/45d11333-2db1-4e32-aea4-b267c903655b/ewm_00032.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b6a57480-abb6-4b67-be6c-f1619725a60b/ewm_00033.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/31a94c90-eaf7-4b3a-95f7-d7169202ec43/ewm_00034.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/974ceddb-adff-4b70-995d-7b17d744f8b3/ewm_00035.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/06b6b8e7-d502-4c13-a36c-842d7124f7ae/ewm_00036.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9328cd67-47e2-4f4b-be33-e54311bfee4c/ewm_00037.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f8e892f9-ff79-4cfc-be3d-320cd6d728e7/ewm_00038.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8125b649-cb7d-494d-9a14-e708891b7ce6/ewm_00039.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d85f1e48-e048-42b7-8fa6-c70cd230ad18/ewm_00040.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0cd6caba-89c4-40e8-8e19-c736e0310b5b/ewm_00041.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0a24a6d1-2877-410a-ba7a-0cd2db0a9e46/ewm_00042.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/94c24cba-0ea2-47e0-823c-693df71a8735/ewm_00043.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2b12f385-aa1e-41d1-b14b-d32d55377e1d/ewm_00044.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/20f99723-b299-4f80-b1f5-7a570904cbd6/ewm_00045.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/80ff6416-b3f4-4a08-a42f-61cf50649a22/ewm_00046.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/523b0205-205f-4f43-bc35-fd22e5d132f5/ewm_00047.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/029b5a2c-5fc4-4d2d-9d3e-0e10cdaef9f3/ewm_00048.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/895bf387-1b04-4729-9cd8-97cca1c13b24/ewm_00049.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9094ba48-dd44-40ec-8abe-8578349b1c09/ewm_00050.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/951cdfab-7ef3-4073-bb36-b8b1a4f7202f/ewm_00051.jpg"
    ],
  },
  {
    title: "Orchard Winter 2",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6bd14e10-5caf-46ba-a5e8-3f132df2af71/Orchard+Spring+2023+-+Origin+Stories_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6bd14e10-5caf-46ba-a5e8-3f132df2af71/Orchard+Spring+2023+-+Origin+Stories_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1a87e9b2-997e-45d0-ac28-37edb0b418e6/Orchard+Spring+2023+-+Origin+Stories_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d9409da4-460e-436b-837c-4b5da64028d8/Orchard+Spring+2023+-+Origin+Stories_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7c529871-4e72-4e95-a374-d4b6bac27a2a/Orchard+Spring+2023+-+Origin+Stories_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/09513291-81e9-447e-9c74-913be00901ee/Orchard+Spring+2023+-+Origin+Stories_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8a1e5561-face-4d9c-a366-5c77a5760d23/Orchard+Spring+2023+-+Origin+Stories_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/59f2bc67-3a13-46da-969a-72e4210c9a6c/Orchard+Spring+2023+-+Origin+Stories_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a2c2794c-8ddb-47db-bfc6-100f6eb3acd9/Orchard+Spring+2023+-+Origin+Stories_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6b5c3cf3-922e-4e62-b914-a6c89b3cc4c0/Orchard+Spring+2023+-+Origin+Stories_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/df11108c-f516-4fc8-8b0a-0584dc2c83ec/Orchard+Spring+2023+-+Origin+Stories_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e39fc7c0-dd84-4613-bd07-756eceb80b75/Orchard+Spring+2023+-+Origin+Stories_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c04f1cdf-5813-41b4-9cff-726e98218645/Orchard+Spring+2023+-+Origin+Stories_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b1a05809-834c-45db-b713-0b9fdb651ce0/Orchard+Spring+2023+-+Origin+Stories_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/87553099-12b0-4d3c-91af-e834a1b77f45/Orchard+Spring+2023+-+Origin+Stories_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c3021967-7a23-4ad1-81a9-e191dc83c882/Orchard+Spring+2023+-+Origin+Stories_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5530a23d-2634-4e37-9831-6e7e06b61c8f/Orchard+Spring+2023+-+Origin+Stories_00016.jpg"
    ],
  },
  {
    title: "SBAMM Cycle 1",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c35586ec-6a2f-498a-a0fd-c0b50343459b/image-000.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c35586ec-6a2f-498a-a0fd-c0b50343459b/image-000.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/47946c9b-b0ce-4af8-bdeb-a934d7be9dea/image-001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7e4082db-bb6c-4e26-88f8-d6457b076864/image-002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/76326f17-dcd5-4bfa-9f0f-b85871fbb68d/image-002-1.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/af02bb6c-4827-4eca-9d1c-bccb26424064/image-003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bd21182f-bdce-43f9-9ea6-28f1d7828326/image-004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/96f91dee-085f-47d0-84a5-5dfca937d73a/image-005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5d56c304-81d7-4c68-a53a-f6203e39db71/image-006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ba801975-b36c-470c-958b-f890f05b8c04/image-007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/853bdcbe-771f-49c3-8250-77546dfb0596/image-008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/42e483df-886e-4440-af5b-fb99f0059f0c/SBAMM+Cycle+1+2021+copy_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/acbb8e3b-1376-43f4-ad86-b68c5bc730e9/Orchard+Spring+2023+-+Origin+Stories_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/85e9a758-a6cf-4b2a-8a34-63c171b682b7/image-013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a42a92db-2180-4954-a3eb-2200f95d346d/image-014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ec5410a8-cbdf-4bc3-999d-5f1017fc07c9/image-015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/50a900f0-0617-4c66-b463-56d0c47ad116/image-016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8bf481a2-62a0-4597-be49-ca966ee391b3/image-017.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4d8a6f9f-1ea5-49a5-a1a2-a1244529addc/image-018.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e25f9d85-0a54-487d-9d27-a2531f723be9/image-019.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e35830ca-8f0b-4c90-b3a6-c2e73c9347c1/image-020.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a0e85160-94c5-48f8-ba71-60a3e5c965c7/image-021.jpg"
    ],
  },
  {
    title: "SBAMM Cycle 2",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f40424f0-ba33-4069-928e-b94906dfa6c4/SBAMM+Cycle+2+2022+Zine_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f40424f0-ba33-4069-928e-b94906dfa6c4/SBAMM+Cycle+2+2022+Zine_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d50f5534-078d-4823-957f-f6fb523d8a9d/1.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/114f7f85-44b8-470e-a30c-f2abdfd353e1/2.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c880b9fe-1072-4760-9352-819d0c0800d0/3.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1939766d-3387-47b4-ac4e-a970ed09895a/4.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c1cddb14-077c-41be-a57a-f8a346af5961/5.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ef5de198-cf76-4664-9708-c0cd3faf447d/6.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8917dffc-06e4-459f-b918-f26c5424f212/7.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0c5fe230-cee8-4ee0-8345-87ca5725e173/8.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/02d53da1-40ff-4ac2-8d02-56502191b7cb/9.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/efaf3b55-9386-4e97-9a50-22df93a17a8e/10.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1212d096-0137-476d-b857-874e9e60e93b/11.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/18f02d59-03cd-45d7-bb29-5b2449df7630/12.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2cbb1756-0231-4d11-bfc1-ddc2333e8cef/13.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1a6d8fbb-2c16-4adc-af7c-0b216646aae7/14.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7ccfebab-111f-438c-83a6-be0040fe577a/15.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/025a843b-4c1a-4cf6-b547-8511dcc12c61/16.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7caebfa5-b17e-4bf7-aaa7-e77f1eabd57c/17.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e8086e6b-e84d-447e-8aa9-d3b4c1b02927/18.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4f723d73-a24c-49f5-ae02-47c0601212ea/19.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3b1e0822-e7dd-453f-87e7-a93782578b35/20.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e1897629-9c83-4654-ba5d-f068068e9511/21.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1092d2c3-c9b7-4725-9547-6ca6652a94e1/22.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cd967acc-374e-4754-82ac-a2220987a068/23.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/49927ca9-fe63-406b-8e47-7b30de4f3039/24.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/368dacc0-6d8d-402c-9812-8eaeefb4aa17/25.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bf1debac-7e9b-4d37-a0d7-251a207d25ad/26.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d11cc8af-c618-448b-b34a-668330f1ab02/27.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ed663924-8cb2-461e-abe4-aae7c2884ec3/28.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d8e30cb4-4cf4-4766-994d-b492967fc2d4/29.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1794d3b0-bb01-42f0-8a1c-a666e2fb6fdf/30.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2df0ba5f-9ffd-422c-819a-ecaf2c3f1819/31.jpg"
    ],
  },
  {
    title: "SBAMM Cycle 3",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/581160f7-c21e-4abc-875e-b9ff257534e0/SBAMM+Cycle+3+Spring+2023_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/581160f7-c21e-4abc-875e-b9ff257534e0/SBAMM+Cycle+3+Spring+2023_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/28984110-8b0a-4cde-b079-7ecd72740fc3/SBAMM+Cycle+3+Spring+2023_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e8112fa6-4246-447c-a509-0565fc071300/SBAMM+Cycle+3+Spring+2023_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0912dbea-b278-42f3-8b21-1a14b0c3b485/SBAMM+Cycle+3+Spring+2023_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/baba5f5e-e071-4378-88a2-44154588cb4a/SBAMM+Cycle+3+Spring+2023_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/985e1f42-2b03-4971-ae3f-87fe0a3713f6/SBAMM+Cycle+3+Spring+2023_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/42bb5e05-ad84-41a5-9027-ed4d0a51234f/SBAMM+Cycle+3+Spring+2023_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ca29b27c-ff6c-46eb-af58-8c5ba049c8c2/SBAMM+Cycle+3+Spring+2023_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f601dd95-f9b7-4fc3-949c-108f7f90a472/SBAMM+Cycle+3+Spring+2023_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/12cf7e68-dfc7-45e0-92e0-69df69994eb1/SBAMM+Cycle+3+Spring+2023_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/588ec487-eef6-4294-abaf-114c223e544d/SBAMM+Cycle+3+Spring+2023_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/fdcf0470-9ecb-4206-bb59-80eb3ecfb20c/SBAMM+Cycle+3+Spring+2023_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c76737ea-7542-4be0-ad91-74e5eeaae740/SBAMM+Cycle+3+Spring+2023_00029.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5adb7607-362b-4bab-8290-f1e5c1d6c568/SBAMM+Cycle+3+Spring+2023_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e5327569-fc81-4f7c-846d-b3e83099a2d3/SBAMM+Cycle+3+Spring+2023_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/57213fab-f6f9-441a-adb0-46f5bd76d3b8/SBAMM+Cycle+3+Spring+2023_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c5de7ac6-d25d-4c4b-a08c-ff9e5ac85427/SBAMM+Cycle+3+Spring+2023_00016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/537a38cf-2e1e-4ba6-8ae8-8fb9dde3d4d9/SBAMM+Cycle+3+Spring+2023_00017.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/534bf436-3f0d-43d4-927b-f9606e5a73bc/SBAMM+Cycle+3+Spring+2023_00018.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/fc22a329-3422-4b60-9887-45d04d2a3986/SBAMM+Cycle+3+Spring+2023_00019.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/13b2d1b6-aab4-49a7-931e-84ea02e2d276/SBAMM+Cycle+3+Spring+2023_00020.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/42fb6ca6-f71a-4365-a4cd-2d828561ed99/SBAMM+Cycle+3+Spring+2023_00021.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/229d7105-80e8-4983-b281-c10411e84265/SBAMM+Cycle+3+Spring+2023_00022.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5f64c564-e4c1-4d82-b8e2-16b08e41b618/SBAMM+Cycle+3+Spring+2023_00023.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a6b4b567-e9f0-4e95-8dea-5f570835d37b/SBAMM+Cycle+3+Spring+2023_00024.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c442e8b6-802a-48fb-b983-a3cfaa386621/SBAMM+Cycle+3+Spring+2023_00025.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/999c24af-2df9-44d3-ad8d-a870c0a50a71/SBAMM+Cycle+3+Spring+2023_00026.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5311a1ea-627c-4fe1-aa71-e1a9399c846d/SBAMM+Cycle+3+Spring+2023_00027.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2378fdfb-beae-46f2-8d6f-78761f1da565/SBAMM+Cycle+3+Spring+2023_00028.jpg"
    ],
  },
  {
    title: "SBAMM Cycle 4",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/677dd03a-5afd-4da4-96c7-be05e3d3146a/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/677dd03a-5afd-4da4-96c7-be05e3d3146a/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ac0cd58d-be06-4c6d-b8b4-53547c22bd53/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/58862348-3eab-4e0b-aa54-e78300439ec4/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1ef97181-38ec-431a-bdd1-c2e36a245801/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c68ca29b-4d23-4082-ba49-548a4d70f504/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/747154ee-c63e-408d-a147-0cf8fc3bdf59/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1cd5ecdf-0411-483e-9390-163fda66ee7c/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/694ecd45-3f4a-4035-b166-9f8165b957a5/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7703162f-d2d2-4249-bd93-beea89b41cc3/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5ac414a5-e50e-47bd-8961-9b12cc9acd02/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/313029a5-d529-41a5-80bf-8eacedd3bafc/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1da56289-7ce9-43f3-8f73-9264d49e443d/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c09a9520-9bd1-48c6-884e-684201f466e6/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/773e3f29-d638-4a9e-8ff5-b554ca9498f1/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/09192e23-7d5d-4e69-a95c-82d8cc131d6b/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ecbbcddc-210f-48de-8182-fe38a511ea39/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2d92502f-42ca-4aa5-ba8e-f3d2f57f1930/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00017.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c16d44a4-b329-462f-93c7-8b33fb515f0d/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00018.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/94ae8deb-80b5-4110-ba90-fe655a76c022/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00019.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/44802985-6120-46b9-ac2a-4d27d91f8c5b/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00020.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/abbd4be9-e543-4a6b-8bb4-9e925f5ca2f7/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00021.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/11ea2dab-0bb2-4f2f-a68b-4f58bf798375/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00022.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7dab526f-f6e6-405c-85d4-4318c42c8962/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00023.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a89acd65-65c1-4ef4-be34-18814d2c3a5e/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00024.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8491d200-4b3c-4029-a251-f50c33179905/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00025.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/edf7ebde-ed2d-40d3-8cd8-2bf4b8bb3e0c/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00026.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9c06df14-4023-4b68-bb99-971a4efc1ddb/SBAMM+Cycle+4+Spring+2023+-+Origin+Stories_00027.jpg"
    ],
  },
  {
    title: "Tenakill Winter",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4ea2632f-8271-4b22-8f9f-0132a556ba19/Tenakill+Winter+2023+Zine+_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4ea2632f-8271-4b22-8f9f-0132a556ba19/Tenakill+Winter+2023+Zine+_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ef10f4b4-4906-4eab-825a-83b1542e1e74/img-2.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e2abf67f-87f3-4bc5-92c2-dc88a6147f24/img-3.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2815c4c8-9bdf-46f2-ba8f-fddbe75d8bd1/img-4.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1cdeef90-3394-4ce9-ae6a-91e16ee03263/img-5.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/caebe349-c3e2-4b84-9ef8-092ba4a90f53/img-6.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6fb9d6cb-2e04-40c1-89a2-24ce2e3ca378/img-7.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bc68b4e6-38f4-48cd-9fba-105550ff4c10/img-8.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d795da91-971e-43a6-8858-30913f08280f/img-9.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/37c954ba-5ec7-4f90-92d9-3baf78beddec/img-10.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/77e108e9-7b61-4002-a1d5-57c3c418a728/img-11.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0a687556-b86b-4a6b-aa09-903dc020de3b/img-12.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5361a60e-0063-4683-b9cb-388f3a7d76db/img-13.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a206a12b-d67c-487c-b570-9fd404528b09/img-14.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c2793fae-e83d-4273-b6a1-5218ce629061/img-15.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5a88befb-b02c-421c-8443-41dffb2e4fae/img-16.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9e66ecdf-762f-4710-9d55-4871b219d0db/img-17.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4644026a-0cb1-439b-a2c3-8ced3c6b8b6e/img-18.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/200c6ab9-2232-40b2-9ee8-7e6cda946955/img-19.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3afe3085-04bb-4dee-b8a0-0d401caf356f/img-20.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ae5e6e9d-ef7f-4873-ae41-c021b36b7a01/img-21.jpg"
    ],
  },
  {
    title: "Visitation Winter",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/72c10793-80f2-46cf-9463-f9832ed66d24/Visitation+Winter+2023+Zine+-1.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/72c10793-80f2-46cf-9463-f9832ed66d24/Visitation+Winter+2023+Zine+-1.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6fe89ab8-683f-49d7-b1eb-d16a6c2edae5/Visitation+Winter+2023+Zine+-2.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/163ce693-d571-4826-8608-38512a3087fb/Visitation+Winter+2023+Zine+-3.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f7068df1-6b3b-4a03-9aa6-bc69403ba9d7/Visitation+Winter+2023+Zine+-4.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9202be14-b3a0-48ac-a700-1ccd5e417c1a/Visitation+Winter+2023+Zine+-5.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9a4ecb1a-7388-482e-9e57-8eb1d60f801b/Visitation+Winter+2023+Zine+-6.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bf330618-9373-42b9-bdfd-aa37d48e0ecb/Visitation+Winter+2023+Zine+-7.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f5658821-6217-4f23-aabb-50946c6e6b68/Visitation+Winter+2023+Zine+-8.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2af22247-71eb-4255-b0aa-3bbe2e86307a/Visitation+Winter+2023+Zine+-9.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7c19242f-b908-4f62-88da-475683a19e10/Visitation+Winter+2023+Zine+-10.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/801b4026-f25f-454e-8080-9a0d0081686d/Visitation+Winter+2023+Zine+-11.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/50c598b9-01e0-4089-88b3-aeec13fcf650/Visitation+Winter+2023+Zine+-12.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/68ec7e59-f42a-4207-9559-a9e4ad230c0d/Visitation+Winter+2023+Zine+-13.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e5d7cb69-b866-4760-bd3d-614c4cbc0534/Visitation+Winter+2023+Zine+-14.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d0d039db-a554-484e-9ecc-d8b529686f51/Visitation+Winter+2023+Zine+-15.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/29a5793a-0559-4b1c-a0a7-c0bb93c994c9/Visitation+Winter+2023+Zine+-16.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ab425ad8-2100-43c8-9094-735df4c78a41/Visitation+Winter+2023+Zine+-17.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a6fc5f1d-b82f-4055-97e2-304baa3cc8df/Visitation+Winter+2023+Zine+-18.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5e861d00-8c6b-4221-843b-c00107850db5/Visitation+Winter+2023+Zine+-19.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/94f66c79-89b9-4249-9485-372987c2ab65/Visitation+Winter+2023+Zine+-20.jpg"
    ],
  },
  {
    title: "Visitation Spring",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a3eb7548-d6f0-480a-a4c4-3ee284944202/Visitation+Spring+2023+-+Origin+Stories_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a3eb7548-d6f0-480a-a4c4-3ee284944202/Visitation+Spring+2023+-+Origin+Stories_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a5d4fff3-ed77-4b8a-9339-7e72cf1ceb2f/Visitation+Spring+2023+-+Origin+Stories_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9e6b0580-9dba-41a8-a720-0eb359731448/Visitation+Spring+2023+-+Origin+Stories_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2db20015-5fa2-46e2-855e-57db070f87c5/Visitation+Spring+2023+-+Origin+Stories_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3c1fdbf0-f785-4b11-9c3e-160bc59d73be/Visitation+Spring+2023+-+Origin+Stories_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/86ee0b6b-4023-4063-942b-73a63d9002a7/Visitation+Spring+2023+-+Origin+Stories_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cf44bac1-22dd-4a90-a478-7be17d57b3e0/Visitation+Spring+2023+-+Origin+Stories_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/0e1cd944-79dd-46fc-a068-eee61373f272/Visitation+Spring+2023+-+Origin+Stories_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7c87e383-4b13-4c4c-a44d-adf57ea70eed/Visitation+Spring+2023+-+Origin+Stories_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/dde3d39a-4f5f-4eca-b90f-1a2f01bdd808/Visitation+Spring+2023+-+Origin+Stories_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/50eaa5e5-1705-459e-93cb-4fed4bf0ee40/Visitation+Spring+2023+-+Origin+Stories_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2846c624-7936-4d3b-8ec8-72a66238fb3c/Visitation+Spring+2023+-+Origin+Stories_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/fbbac518-b141-46f8-b196-f2e14c6091cd/Visitation+Spring+2023+-+Origin+Stories_00013.jpg"
    ],
  },
  {
    title: "Wilbert Winter",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ec9c2a43-e91b-4e2d-88ee-dfe49f3b027f/Wilbert+Winter+2023+Zine+_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ec9c2a43-e91b-4e2d-88ee-dfe49f3b027f/Wilbert+Winter+2023+Zine+_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d9798c20-6020-410d-9780-cd6862761b78/p2_2.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4dac3779-6787-4a9a-9f4d-682da20020b5/p3_3.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/819fac08-d8e5-4983-9f5c-9f090c5c3517/p4_4.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f27eab8f-1a82-4e24-a072-a0ef9310d0c3/p5_5.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4ff58f6b-2aa7-4eb8-a38c-2743976ed38a/p6_6.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2eaad171-c12e-47a8-9048-0104a4166239/p7_7.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a36695a9-9fce-44b2-9f4f-13b7d7519c05/p8_8.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/219fdac7-1807-4a16-8c63-d8bd34377e26/p9_9.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3ac2cf20-a400-42e4-80ee-06fef83c5b97/p10_10.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f88e668b-8db7-4583-81a9-9774089df321/p11_11.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3e387278-30fa-4087-9918-80361356dc8c/p12_12.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f1e2c5b3-7f37-4435-8ef8-ae787a91e7ba/p13_13.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/d0e1e643-4ab1-4e08-bd45-a9c9a35f17cf/p14_14.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/66d935c8-bdfd-4635-8448-9fba374cbb92/p15_15.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/982a9421-d08f-4001-8935-10a30d91c51e/p16_16.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5a0b739a-0720-45bf-89cd-79fd9592e23d/p17_17.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b893d974-9229-40eb-8086-8b02ac8786bc/p18_18.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/05fb99ee-6543-4a76-a0e2-896d3f2bda20/p19_19.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/42ff2d53-cddc-4b1a-97a5-991fb2cc6642/p20_20.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/1bb7aaab-d23d-45a8-9051-650d12b05b86/p21_21.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/719e57b9-f2d7-452f-a8e5-87dea3626ff1/p22_22.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/15aaba00-407b-492e-a3c1-5c0bc207e638/p23_23.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6ff84525-aff6-4591-9166-99cbfca8f2ed/p24_24.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c9f2dc06-dd50-4135-8ff9-fa39a4a06f36/p25_25.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/54a56abb-f232-45fc-96eb-5fe78923b92a/p26_26.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c6745fc7-6566-488e-944d-914b41528e47/p27_27.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/fe1b547d-93a3-49b9-9250-42f195d57228/p28_28.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/b5ffacce-471e-4610-9ac4-0f65346a04bd/p29_29.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/525a3f82-b4a8-4f36-a6f4-458505e57831/p30_30.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/09b7dccd-5caa-4648-a8e8-89f7a54a3fdb/p31_31.jpg"
    ],
  },
  {
    title: "Wilbert Spring",
    cover: "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c6c6532c-90e4-4e93-b08b-1a6605d14273/WFM+Spring+2023+-+Origin+Stories_00001.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c6c6532c-90e4-4e93-b08b-1a6605d14273/WFM+Spring+2023+-+Origin+Stories_00001.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/5c4d9ff0-193a-4da2-8c8f-0708106a21d8/WFM+Spring+2023+-+Origin+Stories_00002.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/9b58d122-7db4-4973-a484-9f6fb3553f56/WFM+Spring+2023+-+Origin+Stories_00003.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3f691239-4521-4818-8612-4cd963734d1a/WFM+Spring+2023+-+Origin+Stories_00004.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/582bce42-30af-4a90-b60f-56e7060d434b/WFM+Spring+2023+-+Origin+Stories_00005.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/ea4cd969-4660-4839-9a9b-0ba857a0c705/WFM+Spring+2023+-+Origin+Stories_00006.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/c57b9f80-29eb-4cda-a3b8-7f62d10be0e2/WFM+Spring+2023+-+Origin+Stories_00007.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4fc4095c-891a-4e42-932e-2ee33fb965f2/WFM+Spring+2023+-+Origin+Stories_00008.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/7d1f67ae-98d3-406e-95cd-b60ff0eeb262/WFM+Spring+2023+-+Origin+Stories_00009.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/bd54c577-f833-40db-aa7f-0d42db1641bb/WFM+Spring+2023+-+Origin+Stories_00010.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/dec6c255-31fc-40a3-adac-dd73e835dcdf/WFM+Spring+2023+-+Origin+Stories_00011.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2fd0f19d-ffae-476f-b2ae-432010cf76eb/WFM+Spring+2023+-+Origin+Stories_00012.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/8e8fa5ef-dd38-4e6d-b262-6cf756e8172f/WFM+Spring+2023+-+Origin+Stories_00013.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/85d48e7d-2a33-4dd3-9717-d9a398dd5709/WFM+Spring+2023+-+Origin+Stories_00014.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/cc4c8a88-aa84-4552-82bb-5def014844e7/WFM+Spring+2023+-+Origin+Stories_00015.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/76600417-f113-44f9-99ed-2bf438915207/WFM+Spring+2023+-+Origin+Stories_00016.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/612f53cb-9d44-4341-a318-338b9d37ddec/WFM+Spring+2023+-+Origin+Stories_00017.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/855c33a2-a938-444f-91c5-48d1f588308d/WFM+Spring+2023+-+Origin+Stories_00018.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a392d299-ea07-4841-bad0-2ae6d6b497c3/WFM+Spring+2023+-+Origin+Stories_00019.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/6d280141-50a3-480a-94bc-2356f45178aa/WFM+Spring+2023+-+Origin+Stories_00020.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/2a2fdebd-5d91-4a04-9fb0-adca05304380/WFM+Spring+2023+-+Origin+Stories_00021.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/a3cdbeab-6f8c-40e5-a383-1d64977a0b28/WFM+Spring+2023+-+Origin+Stories_00022.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/24c99258-8246-4f52-b77a-a75e2317e0e1/WFM+Spring+2023+-+Origin+Stories_00023.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e9ad2ca5-3288-40ee-b67c-75043fc04f75/WFM+Spring+2023+-+Origin+Stories_00024.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/f7226e86-fd4d-4aa3-940c-27c0ca27f3c4/WFM+Spring+2023+-+Origin+Stories_00025.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/98888f18-9327-4aa4-8592-c1595a58c189/WFM+Spring+2023+-+Origin+Stories_00026.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4d260462-ef20-4d24-b72c-10f0e58371b7/WFM+Spring+2023+-+Origin+Stories_00027.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/3b78e3e2-48f4-4635-9d0e-6ac74b674301/WFM+Spring+2023+-+Origin+Stories_00028.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/e013962d-e0f9-4ba4-8fd7-59a1843e0dfe/WFM+Spring+2023+-+Origin+Stories_00029.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/4d449a39-4a0a-4d7b-bf86-53efeac4b4aa/WFM+Spring+2023+-+Origin+Stories_00030.jpg",
      "https://images.squarespace-cdn.com/content/v1/6495b91109b6e42d6b8386ad/83944760-cae0-40a5-9e56-d6fda8b8d291/WFM+Spring+2023+-+Origin+Stories_00031.jpg"
    ],
  },
];

const Zines = () => {
  const [activeZine, setActiveZine] = useState<number | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const close = () => setActiveZine(null);
  const open = (i: number) => { setActiveZine(i); setPageIndex(0); setDirection("next"); };

  const currentImages = activeZine !== null ? zines[activeZine].images : [];
  const prev = () => { setDirection("prev"); setPageIndex((p) => (p - 1 + currentImages.length) % currentImages.length); };
  const next = () => { setDirection("next"); setPageIndex((p) => (p + 1) % currentImages.length); };

  useEffect(() => {
    if (activeZine === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeZine, currentImages.length]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-20">
        <div className="bg-gradient-to-br from-[hsl(var(--fun-purple)/0.15)] via-[hsl(var(--fun-pink)/0.1)] to-[hsl(var(--fun-yellow)/0.15)] py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-4">
              <BrandName className="text-5xl md:text-7xl" /> Zines
            </h1>
            <p className="text-foreground text-xl max-w-2xl mx-auto">
              Meet the characters and stories created by our student authors.
            </p>
          </div>
        </div>
      </section>

      {/* Student Zines section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Student <span className="text-primary">Zines</span>
            </h2>
            <p className="text-foreground text-lg">
              Our students are published authors! Each card and adventure begins with original zines created by ZINEniac scholars.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {zines.map((z, i) => (
              <button
                key={z.title}
                type="button"
                onClick={() => open(i)}
                className="group block text-left"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.03] h-80">
                  <img
                    src={z.cover}
                    alt={z.title}
                    className="w-full h-full object-cover object-bottom scale-[1.09] origin-bottom"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-center font-bold text-foreground group-hover:text-primary transition-colors">
                  {z.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox slider */}
      {activeZine !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <img
            key={`${activeZine}-${pageIndex}`}
            src={currentImages[pageIndex]}
            alt={`${zines[activeZine].title} - page ${pageIndex + 1}`}
            className={`max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl ${direction === "next" ? "animate-slide-in-next" : "animate-slide-in-prev"}`}
            onClick={(e) => e.stopPropagation()}
          />

          <div className="mt-6 text-center text-white" onClick={(e) => e.stopPropagation()}>
            <p className="font-bold text-lg">{zines[activeZine].title}</p>
            <p className="text-white/60 text-sm mt-1">
              {pageIndex + 1} / {currentImages.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Zines;
