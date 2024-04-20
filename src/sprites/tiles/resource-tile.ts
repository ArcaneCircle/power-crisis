import { Scene } from "phaser";
import { TEXTURE_KEYS } from "~/constants/texture-keys";
import { CONSUMABLE_RESOURCES, ConsumableResource } from "~/types/resource";
import { TileBasic } from "./common";
import { ATLAS_KEYS, ICON_KEYS } from "~/constants/atlas-keys";
import { FONT_KEYS } from "~/constants/font-keys";
import { COLORS } from "~/constants/colors";

export type ResourceMetadata = {
  type: ConsumableResource;
  maxAmount: number;
  currentAmount: number;
};

const RESOURCE_GRID_TEXTURE_MAP: Record<ConsumableResource, string> = {
  [CONSUMABLE_RESOURCES.COAL]: TEXTURE_KEYS.BROWN_6_TILE,
  [CONSUMABLE_RESOURCES.NATURAL_GAS]: TEXTURE_KEYS.YELLOW_7_TILE,
  [CONSUMABLE_RESOURCES.OIL]: TEXTURE_KEYS.BROWN_4_TILE,
  [CONSUMABLE_RESOURCES.URANIUM]: TEXTURE_KEYS.ORANGE_6_TILE,
  [CONSUMABLE_RESOURCES.BIOMASS]: TEXTURE_KEYS.GREEN_5_TILE,
};

const RESOURCE_TEXTURE_MAP: Record<ConsumableResource, string> = {
  [CONSUMABLE_RESOURCES.COAL]: ICON_KEYS.COAL,
  [CONSUMABLE_RESOURCES.NATURAL_GAS]: ICON_KEYS.NATURAL_GAS,
  [CONSUMABLE_RESOURCES.OIL]: ICON_KEYS.OIL,
  [CONSUMABLE_RESOURCES.URANIUM]: ICON_KEYS.URANIUM,
  [CONSUMABLE_RESOURCES.BIOMASS]: ICON_KEYS.BIOMASS,
};

export class ResourceTileSprite extends TileBasic {
  resource: ResourceMetadata;
  amountText: Phaser.GameObjects.Text;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    index: number,
    resource: ResourceMetadata
  ) {
    const texture = RESOURCE_GRID_TEXTURE_MAP[resource.type];
    super(scene, x, y, texture, index, "resource");
    scene.add.existing(this);
    this.resource = resource;

    const icon = new Phaser.GameObjects.Image(
      this.scene,
      0,
      0,
      ATLAS_KEYS.ICONS,
      RESOURCE_TEXTURE_MAP[resource.type]
    );
    this.amountText = new Phaser.GameObjects.Text(
      this.scene,
      0,
      0,
      resource.currentAmount === Infinity
        ? "∞"
        : resource.currentAmount.toString(),
      {
        fontFamily: FONT_KEYS.PASSION_ONE,
        fontSize: 24,
        color: COLORS.WHITE_5,
      }
    )
      .setOrigin(0.5)
      .setPosition(36, 36);

    this.add([icon, this.amountText]);
  }
}
