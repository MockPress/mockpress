import { LoopFn } from "src/custom-type";
import * as util from "../utils";

/**
 * Generates a random Image of the given size.
 * Utilizes the images created by https://picsum.photos/ .
 *
 * @remarks
 * ```
 * function image(width: number, height: number): LoopFn<string>
 * ```
 *
 * @example
 * ```
 * { profileUrl: mock.image(200, 200) }
 * // https://picsum.photos/200/200?random=0
 * ```
 *
 * @param width - Width of the generated image in px. Defaults to 300.
 * @param height - Height of the generated image in px. Defaults to 300.
 * @returns LoopFunction of returning url of the random image.
 * @public
 */
const image: ImageType =
  (width = 300, height = 300) =>
  (_, loopIndex) => {
    return util.randomImage(width, height, loopIndex);
  };

type ImageType = (width: number, height: number) => LoopFn<string>;

export default image;
