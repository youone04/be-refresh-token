import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Tutorial = db.define("tutorial", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

const Comment = db.define("comment", {
    name: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING
    }
  });

  Tutorial.hasMany(Comment, { as: "comments" });
  Comment.belongsTo(Tutorial, {
    foreignKey: "tutorialId",
    as: "tutorial",
  });

  export {Tutorial , Comment} ;