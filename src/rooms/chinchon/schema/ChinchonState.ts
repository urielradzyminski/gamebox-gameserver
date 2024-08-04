import { Schema, Context, type, MapSchema } from "@colyseus/schema";

type RoomState = "waiting" | "playing" | "finished";

export class Player extends Schema {
  @type("string") name: string = '';
  @type("number") score: number = 0;
}

export class ChinchonState extends Schema {
    @type([ Player ]) players = new MapSchema<Player>();
    @type("string") state: RoomState = "waiting";
    @type("string") roomOwnerId: string = "";
}
