import { Scene } from "phaser";
import { TEXTURE_KEYS } from "~/constants/texture-keys";
import { CONSUMABLE_RESOURCES, ConsumableResource } from "~/types/resource";
import { TileBasic, TileType } from "./common";

type ResourceMetadata = {
  type: ConsumableResource;
  maxAmount: number;
  currentAmount: number;
};

export class ResourceTileSprite
  extends Phaser.GameObjects.Sprite
  implements TileBasic
{
  readonly index: number;
  readonly tileType: TileType = "resource";
  resource: ResourceMetadata;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    index: number,
    resource: ResourceMetadata
  ) {
    const texture = getTextureByResourceType(resource.type);
    super(scene, x, y, texture);
    scene.add.existing(this);

    this.index = index;
    this.resource = resource;
  }
}

const getTextureByResourceType = (type: ConsumableResource) => {
  switch (type) {
    case CONSUMABLE_RESOURCES.COAL:
      return TEXTURE_KEYS.BROWN_6_TILE;
    case CONSUMABLE_RESOURCES.NATURAL_GAS:
      return TEXTURE_KEYS.YELLOW_7_TILE;
    case CONSUMABLE_RESOURCES.OIL:
      return TEXTURE_KEYS.BROWN_4_TILE;
    case CONSUMABLE_RESOURCES.URANIUM:
      return TEXTURE_KEYS.ORANGE_6_TILE;
    case CONSUMABLE_RESOURCES.BIOMASS:
      return TEXTURE_KEYS.GREEN_5_TILE;
  }
};
