import fc from "fast-check";
import { sum } from "./index";

it("sum is commutative", () => {
  fc.assert(
    fc.property(fc.double(), fc.double(), (a, b) =>
      expect(sum(a, b)).toBe(sum(b, a))
    )
  );
});
