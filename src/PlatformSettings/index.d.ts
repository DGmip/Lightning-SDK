import { FontFaceDefinition } from '../Application'
import { RouterPlatformSettings } from '../Router'

/**
 * [Platform Settings](https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/settings?id=platform-settings)
 */
export interface PlatformSettings {
  plugins?: {
    profile?: any;
    metrics?: any;
    mediaPlayer?: any;
    ads?: any;
    router?: any;
    tv?: any;
    purchase?: any;
    pin?: any;
  };
  /**
   * The target ECMAScript environment for the App.
   */
  esEnv?: 'es5' | 'es6';
  /**
   * If set to `true`, initializes the Lightning Inspector
   *
   * @remarks
   * The Lightning Inspector renders out a HTML structure inside the DOM to mimic the canvas.
   *
   * @defaultValue `false`
   */
  inspector?: boolean;

  /**
   * If set to `true`, shows a frames-per-second indicator on the top-left corner of the screen
   *
   * @defaultValue `false`
   */
  showFps?: boolean;
  /**
   * Custom font loader
   *
   * @param fontsToLoad
   * @param store Add loaded [FontFace](https://developer.mozilla.org/en-US/docs/Web/API/FontFace) instances to this array
   */
  fontLoader?(fontsToLoad: FontFaceDefinition[], store: FontFace[]): void;
  /**
   * If set to `true`, shows the active versions of Lightning Core and SDK on the bottom-right corner of the screen
   *
   * @defaultValue `false`
   */
  showVersion?: boolean;

  /**
   * If set to `true`, enables console logging in the Log plugin
   *
   * @remarks
   * See [Log](https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/log)
   * for more information.
   *
   */
  log?: boolean;

  onClose?: any;

  /**
   * Indicates whether or not to render video as a texture on the active drawing
   * canvas. Can also be set by adding a queryparam ?texture.
   *
   * @remarks
   * Used by the [VideoPlayer](https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/videoplayer?id=videoplayer)
   * plugin.
   *
   * @defaultValue `false`
   */
  textureMode?: boolean;

  /**
   * Path to the folder where the assets of the App are located. The path
   * is used by Utils.asset() to look up assets.
   *
   * @remarks
   * See [Utils](https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/utils?id=utils)
   * for more information.
   */
  path?: string;
  /**
   * Router plugin settings
   *
   * @remarks
   * See [Router Settings](https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/router/settings?id=router-settings)
   * for more information.
   */
  router?: RouterPlatformSettings;
  /**
   * Image plugin settings
   *
   * See [Image plugin](https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/image?id=image)
   * for more information.
   */
  image?: {
    /**
     * Image plugin quality
     *
     * @remarks
     * Depending on this setting, the images that are returned by the image server will be smaller
     * than actually displayed on the screen. Lightning stretches the images to fit them within the
     * desired dimensions.
     *
     * The Platform Setting image.quality is a value between 1 and 100, where 1 means low quality and
     * 100 is the original image quality.
     *
     * See [Image plugin](https://lightningjs.io/docs/#/lightning-sdk-reference/plugins/image?id=image)
     * for more information.
     */
    quality?: number
  }
}
