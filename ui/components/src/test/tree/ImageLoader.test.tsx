/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import { expect } from "chai";
import { TreeImageLoader } from "../../ui-components/tree/ImageLoader";

describe("TreeImageLoader", () => {
  const imageLoader = new TreeImageLoader();

  describe("load", () => {
    it("returns correct image", () => {
      const image = imageLoader.load({ icon: "test-icon" });

      expect(image).is.not.undefined;

      expect(image!.sourceType).to.equal("core-icon");
      expect(image!.value).to.equal("test-icon");
    });

    it("returns undefined when node item has no icon", () => {
      const image = imageLoader.load({});

      expect(image).is.undefined;
    });
  });
});
