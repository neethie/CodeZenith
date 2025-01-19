import { nanoid } from "nanoid";

import {
    BeforeCreate,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";

@Table({
    tableName: "code",
    timestamps: true,
})
export class Code extends Model {
    @PrimaryKey
    @Column({
        type: DataType.STRING(21),
    })
    declare id: string;

    @Column({
        type: DataType.TEXT,
    })
    declare code: string;

    @Column({
        type: DataType.INTEGER,
    })
    declare languageId: number;

    @BeforeCreate
    static generateId = (instance: Code) => {
        instance.id = nanoid();
    };
}
