/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { expect } from "chai";
import * as faker from "faker";
import { LabelDefinition, LabelDefinitionJSON, LabelCompositeValue } from "../LabelDefinition";
import {
  createRandomLabelDefinitionJSON, createRandomLabelDefinition,
  createRandomLabelCompositeValue, createRandomLabelCompositeValueJSON,
} from "./_helpers/random";

const createRandomCompositeLabelDefinition = (): LabelDefinition => {
  return { displayValue: faker.random.word(), rawValue: createRandomLabelCompositeValue(), typeName: "composite" };
};

const createRandomCompositeLabelDefinitionJSON = (): LabelDefinitionJSON => {
  return { displayValue: faker.random.word(), rawValue: createRandomLabelCompositeValueJSON(), typeName: "composite" };
};

describe("LabelDefinition", () => {

  describe("toJSON", () => {

    it("serializes LabelDefinition", () => {
      const definition = createRandomLabelDefinition();
      const json = LabelDefinition.toJSON(definition);
      expect(json).to.matchSnapshot();
    });

    it("serializes LabelDefinition with composite value", () => {
      const definition = createRandomCompositeLabelDefinition();
      const json = LabelDefinition.toJSON(definition);
      expect(json).to.matchSnapshot();
    });

  });

  describe("fromJSON", () => {

    it("creates valid LabelDefinition from JSON", () => {
      const json = createRandomLabelDefinitionJSON();
      const definition = LabelDefinition.fromJSON(json);
      expect(definition).to.matchSnapshot();
    });

    it("creates valid LabelDefinition from serialized JSON", () => {
      const json = createRandomLabelDefinitionJSON();
      const definition = LabelDefinition.fromJSON(JSON.stringify(json));
      expect(definition).to.matchSnapshot();
    });

    it("creates valid LabelDefinition with composite value from JSON", () => {
      const json = createRandomCompositeLabelDefinitionJSON();
      const definition = LabelDefinition.fromJSON(json);
      expect(definition).to.matchSnapshot();
    });

    it("creates valid LabelDefinition with composite value from serialized JSON", () => {
      const json = createRandomCompositeLabelDefinitionJSON();
      const definition = LabelDefinition.fromJSON(JSON.stringify(json));
      expect(definition).to.matchSnapshot();
    });

  });

  describe("fromLabelString", () => {

    it("creates valid LabelDefinition from label string", () => {
      const label = faker.random.word();
      const definition = LabelDefinition.fromLabelString(label);
      expect(definition).to.matchSnapshot();
    });

  });

});

describe("LabelCompositeValue", () => {

  describe("toJSON", () => {

    it("serializes LabelCompositeValue", () => {
      const compositeValue = createRandomLabelCompositeValue();
      const json = LabelCompositeValue.toJSON(compositeValue);
      expect(json).to.matchSnapshot();
    });

  });

  describe("fromJSON", () => {

    it("creates valid LabelCompositeValue from JSON", () => {
      const json = createRandomLabelCompositeValueJSON();
      const compositeValue = LabelCompositeValue.fromJSON(json);
      expect(compositeValue).to.matchSnapshot();
    });

  });

});
