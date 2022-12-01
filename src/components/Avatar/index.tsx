import { memo, useCallback } from 'react'
import { AvatarProps } from '@/types'
import styles from './styles.module.scss'

enum MouthClass {
  TALK = '--talk',
  SMILE = '--smile',
  POUT = '--pout',
}

enum BodyClass {
  TALK = '--talk',
  BREATH = '--breath',
}

enum EyeClass {
  BLINK = '--blink',
  WINK = '--wink',
  ROLL = '--roll',
  LOOK_UP = '--look-up',
}

export const Avatar = memo(
  ({
    blinking = true,
    breathing = true,
    talking = false,
    smiling = false,
    pouting = false,
    liftLeftEyebrow = false,
    liftRightEyebrow = false,
    lookingUp = false,
    rollingEyes = false,
    leftEyeWink = false,
    rightEyeWink = false,
    width = 300,
    height,
    additionalClass = '',
  }: AvatarProps) => {
    const getEyeClass = useCallback(
      (eyeWinking: boolean): EyeClass | '' => {
        if (rollingEyes) {
          return EyeClass.ROLL
        }

        if (lookingUp) {
          return EyeClass.LOOK_UP
        }

        if (leftEyeWink || rightEyeWink) {
          return eyeWinking ? EyeClass.WINK : ''
        }

        if (blinking) {
          return EyeClass.BLINK
        }

        return ''
      },
      [blinking, rollingEyes, lookingUp, leftEyeWink, rightEyeWink]
    )

    const mouthClass: MouthClass | '' = talking
      ? MouthClass.TALK
      : smiling
      ? MouthClass.SMILE
      : pouting
      ? MouthClass.POUT
      : ''

    const bodyClass: BodyClass | '' = !breathing
      ? ''
      : talking
      ? BodyClass.TALK
      : BodyClass.BREATH

    const leftEyeClass: EyeClass | '' = getEyeClass(leftEyeWink)

    const rightEyeClass: EyeClass | '' = getEyeClass(rightEyeWink)

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden={true}
        viewBox='0 -15 200 200'
        style={{
          overflow: 'hidden!important',
        }}
        className={`${styles.avatar} ${additionalClass}`}
        width={width}
        height={height}
      >
        <defs id='SvgjsDefs1007'>
          <radialGradient
            id='SvgjsRadialGradient2773'
            cx='100'
            cy='113'
            r='40'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-facehighlight-gradient-single-0'
          >
            <stop
              id='SvgjsStop2774'
              stopOpacity='0.5'
              stopColor='#ffc9b5'
              offset='0'
            />
            <stop
              id='SvgjsStop2775'
              stopOpacity='0'
              stopColor='#f5af95'
              offset='0.9'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient2777'
            cx='100'
            cy='57'
            r='36'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-facehighlight-gradient-single-1'
          >
            <stop
              id='SvgjsStop2778'
              stopOpacity='0.5'
              stopColor='#ffc9b5'
              offset='0'
            />
            <stop
              id='SvgjsStop2779'
              stopOpacity='0'
              stopColor='#f5af95'
              offset='0.9'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3187'
            cx='129.05'
            cy='85.956'
            r='15.117'
            gradientTransform='matrix(-0.9945 0.1042 0.1042 0.9945 192.8274 -12.4637)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesback-gradient-left-0'
          >
            <stop
              id='SvgjsStop3188'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3189'
              stopOpacity='1'
              stopColor='#fcfdfd'
              offset='0.316'
            />
            <stop
              id='SvgjsStop3190'
              stopOpacity='1'
              stopColor='#f4f7f8'
              offset='0.505'
            />
            <stop
              id='SvgjsStop3191'
              stopOpacity='1'
              stopColor='#e5ecef'
              offset='0.661'
            />
            <stop
              id='SvgjsStop3192'
              stopOpacity='1'
              stopColor='#d8e2e7'
              offset='0.76'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3194'
            cx='129.049'
            cy='85.956'
            r='15.117'
            gradientTransform='matrix(0.9945 0.1042 -0.1042 0.9945 7.1735 -12.4637)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesback-gradient-right-0'
          >
            <stop
              id='SvgjsStop3195'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3196'
              stopOpacity='1'
              stopColor='#fcfdfd'
              offset='0.316'
            />
            <stop
              id='SvgjsStop3197'
              stopOpacity='1'
              stopColor='#f4f7f8'
              offset='0.505'
            />
            <stop
              id='SvgjsStop3198'
              stopOpacity='1'
              stopColor='#e5ecef'
              offset='0.661'
            />
            <stop
              id='SvgjsStop3199'
              stopOpacity='1'
              stopColor='#d8e2e7'
              offset='0.76'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3201'
            cx='129.05'
            cy='85.956'
            r='15.117'
            gradientTransform='matrix(-0.9945 0.1042 0.1042 0.9945 192.8274 -12.4637)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesfront-gradient-left-0'
          >
            <stop
              id='SvgjsStop3202'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3203'
              stopOpacity='1'
              stopColor='#fcfdfd'
              offset='0.316'
            />
            <stop
              id='SvgjsStop3204'
              stopOpacity='1'
              stopColor='#f4f7f8'
              offset='0.505'
            />
            <stop
              id='SvgjsStop3205'
              stopOpacity='1'
              stopColor='#e5ecef'
              offset='0.661'
            />
            <stop
              id='SvgjsStop3206'
              stopOpacity='1'
              stopColor='#d8e2e7'
              offset='0.76'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3210'
            cx='121.786'
            cy='84.496'
            fx='133.039'
            fy='84.527'
            r='16.003'
            gradientTransform='matrix(0.9998 0.0208 0.0166 -0.7998 -44.9524 149.5433)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesfront-gradient-left-3'
          >
            <stop
              id='SvgjsStop3211'
              stopOpacity='1'
              stopColor='#e69375'
              offset='0'
            />
            <stop
              id='SvgjsStop3212'
              stopOpacity='0.3'
              stopColor='#e69375'
              offset='0.7'
            />
            <stop
              id='SvgjsStop3213'
              stopOpacity='0'
              stopColor='#f5af95'
              offset='1'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3215'
            cx='69.124'
            cy='107.529'
            r='29.525'
            gradientTransform='matrix(1.0336 0 0 1.0336 -1.6792 1.7282)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesfront-gradient-left-4'
          >
            <stop
              id='SvgjsStop3216'
              stopOpacity='0'
              stopColor='#000000'
              offset='0.95'
            />
            <stop
              id='SvgjsStop3217'
              stopOpacity='0.3'
              stopColor='#000000'
              offset='1'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3221'
            cx='129.049'
            cy='85.956'
            r='15.117'
            gradientTransform='matrix(0.9945 0.1042 -0.1042 0.9945 7.1735 -12.4637)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesfront-gradient-right-0'
          >
            <stop
              id='SvgjsStop3222'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3223'
              stopOpacity='1'
              stopColor='#fcfdfd'
              offset='0.316'
            />
            <stop
              id='SvgjsStop3224'
              stopOpacity='1'
              stopColor='#f4f7f8'
              offset='0.505'
            />
            <stop
              id='SvgjsStop3225'
              stopOpacity='1'
              stopColor='#e5ecef'
              offset='0.661'
            />
            <stop
              id='SvgjsStop3226'
              stopOpacity='1'
              stopColor='#d8e2e7'
              offset='0.76'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3230'
            cx='121.786'
            cy='84.496'
            fx='133.039'
            fy='84.527'
            r='16.003'
            gradientTransform='matrix(-0.9998 0.0208 -0.0166 -0.7998 244.9525 149.5433)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesfront-gradient-right-3'
          >
            <stop
              id='SvgjsStop3231'
              stopOpacity='1'
              stopColor='#e69375'
              offset='0'
            />
            <stop
              id='SvgjsStop3232'
              stopOpacity='0.3'
              stopColor='#e69375'
              offset='0.7'
            />
            <stop
              id='SvgjsStop3233'
              stopOpacity='0'
              stopColor='#f5af95'
              offset='1'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3235'
            cx='69.124'
            cy='107.529'
            r='29.525'
            gradientTransform='matrix(-1.0336 0 0 1.0336 201.6792 1.7282)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesfront-gradient-right-4'
          >
            <stop
              id='SvgjsStop3236'
              stopOpacity='0'
              stopColor='#000000'
              offset='0.95'
            />
            <stop
              id='SvgjsStop3237'
              stopOpacity='0.3'
              stopColor='#000000'
              offset='1'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3356'
            cx='-558.588'
            cy='-490.918'
            r='84.646'
            gradientTransform='matrix(0.096 -0.0248 0.0245 0.0961 140.5478 120.3577)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-left-1'
          >
            <stop
              id='SvgjsStop3357'
              stopOpacity='0.8'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3358'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3360'
            cx='-565.337'
            cy='-492.691'
            r='84.644'
            gradientTransform='matrix(0.0991 8.856325e-004 -0.0011 0.0991 130.3774 136.3533)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-left-2'
          >
            <stop
              id='SvgjsStop3361'
              stopOpacity='0.8'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3362'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </radialGradient>
          <linearGradient
            id='SvgjsLinearGradient3366'
            x1='122.283'
            y1='93.047'
            x2='123.61'
            y2='91.466'
            gradientTransform='matrix(1 0 0 1 -52 0)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-left-5'
          >
            <stop
              id='SvgjsStop3367'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3368'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </linearGradient>
          <linearGradient
            id='SvgjsLinearGradient3370'
            x1='127'
            y1='85'
            x2='125'
            y2='87'
            gradientTransform='matrix(1 0 0 1 -50 0)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-left-6'
          >
            <stop
              id='SvgjsStop3371'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3372'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </linearGradient>
          <linearGradient
            id='SvgjsLinearGradient3374'
            x1='130'
            y1='81'
            x2='126'
            y2='85'
            gradientTransform='matrix(1 0 0 1 -50 0)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-left-7'
          >
            <stop
              id='SvgjsStop3375'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3376'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </linearGradient>
          <radialGradient
            id='SvgjsRadialGradient3379'
            cx='-578.76'
            cy='-490.73'
            r='84.646'
            gradientTransform='matrix(0.096 -0.0248 0.0245 0.0961 192.4794 119.8404)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-right-1'
          >
            <stop
              id='SvgjsStop3380'
              stopOpacity='0.8'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3381'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </radialGradient>
          <radialGradient
            id='SvgjsRadialGradient3383'
            cx='-584.778'
            cy='-487.329'
            r='84.644'
            gradientTransform='matrix(0.0991 8.856325e-004 -0.0011 0.0991 182.3104 135.839)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-right-2'
          >
            <stop
              id='SvgjsStop3384'
              stopOpacity='0.8'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3385'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </radialGradient>
          <linearGradient
            id='SvgjsLinearGradient3389'
            x1='120.284'
            y1='93.047'
            x2='121.611'
            y2='91.467'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-right-5'
          >
            <stop
              id='SvgjsStop3390'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3391'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </linearGradient>
          <linearGradient
            id='SvgjsLinearGradient3393'
            x1='127'
            y1='85'
            x2='125'
            y2='87'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-right-6'
          >
            <stop
              id='SvgjsStop3394'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3395'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </linearGradient>
          <linearGradient
            id='SvgjsLinearGradient3397'
            x1='130'
            y1='81'
            x2='126'
            y2='85'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-eyesiris-gradient-right-7'
          >
            <stop
              id='SvgjsStop3398'
              stopOpacity='1'
              stopColor='#ffffff'
              offset='0'
            />
            <stop
              id='SvgjsStop3399'
              stopOpacity='0'
              stopColor='#ffffff'
              offset='1'
            />
          </linearGradient>
          <linearGradient
            id='SvgjsLinearGradient3748'
            x1='130'
            y1='77'
            x2='130'
            y2='98'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-glasses-gradient-single-0'
          >
            <stop
              id='SvgjsStop3749'
              stopOpacity='1'
              stopColor='#26120b'
              offset='0'
            />
            <stop
              id='SvgjsStop3750'
              stopOpacity='0.5'
              stopColor='#26120b'
              offset='1'
            />
          </linearGradient>
          <linearGradient
            id='SvgjsLinearGradient3752'
            x1='130'
            y1='77'
            x2='130'
            y2='98'
            gradientTransform='matrix(-1 0 0 1 200 0)'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-glasses-gradient-single-1'
          >
            <stop
              id='SvgjsStop3753'
              stopOpacity='1'
              stopColor='#26120b'
              offset='0'
            />
            <stop
              id='SvgjsStop3754'
              stopOpacity='0.5'
              stopColor='#26120b'
              offset='1'
            />
          </linearGradient>
          <radialGradient
            id='SvgjsRadialGradient3819'
            cx='100'
            cy='100'
            r='150'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-backs-gradient-single-1'
          >
            <stop
              id='SvgjsStop3820'
              stopOpacity='0'
              stopColor='#ecf0f1'
              offset='0'
            />
            <stop
              id='SvgjsStop3821'
              stopOpacity='1'
              stopColor='#c6dce2'
              offset='0.2'
            />
            <stop
              id='SvgjsStop3822'
              stopOpacity='0'
              stopColor='#c6dce2'
              offset='1'
            />
          </radialGradient>
          <linearGradient
            id='SvgjsLinearGradient3858'
            x1='99.98'
            y1='171.27'
            x2='99.98'
            y2='136.351'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-chinshadow-gradient-single-0'
          >
            <stop
              id='SvgjsStop3859'
              stopOpacity='0.8'
              stopColor='#e69375'
              offset='0'
            />
            <stop
              id='SvgjsStop3860'
              stopOpacity='1'
              stopColor='#c7633d'
              offset='0.7'
            />
          </linearGradient>
          <linearGradient
            id='SvgjsLinearGradient3911'
            x1='100'
            y1='141'
            x2='100'
            y2='138'
            gradientUnits='userSpaceOnUse'
            className='svga-on-canvas-mouth-gradient-single-0'
          >
            <stop
              id='SvgjsStop3912'
              stopOpacity='1'
              stopColor='#eda184'
              offset='0.1'
            />
            <stop
              id='SvgjsStop3913'
              stopOpacity='1'
              stopColor='#e69375'
              offset='1'
            />
          </linearGradient>
        </defs>
        <g id='svga-group-wrapper'>
          <g id='svga-group-backs-single' />
          <g id='svga-group-humanwrap-move' transform='matrix(1,0,0,1,0,0)'>
            <g id='svga-group-humanwrap' transform='matrix(1,0,0,1,0,0)'>
              <g id='svga-group-hair-back-move' transform='matrix(1,0,0,1,0,0)'>
                <g id='svga-group-hair-back' transform='matrix(1,0,0,1,0,0)'>
                  <path
                    id='SvgjsPath3826'
                    d='M19.273 278.474c-2.987 0-5.493-0.846-7.277-2.449 0.26 0.058 0.551 0.086 0.869 0.086 3.453 0 9.151-3.228 11.324-7.389 0.217-2.067-0.396-4.376-1.812-6.896 -3.315-5.838-8.82-7.466-14.648-9.189 -4.849-1.434-9.862-2.916-13.504-7.058 -9.954-10.596-9.202-23.263 2.233-37.651 -0.092-0.686-0.144-1.071-0.196-1.463 -3.866-7.445-4.552-14.183-2.053-20.081 3.215-7.589 11.649-13.6 24.39-17.383l0.078-0.022 -0.006-0.081c-0.188-2.399 0.79-5.015 2.684-7.174 2.575-2.938 6.422-4.685 10.832-4.919l0.178-0.009 -0.101-0.147c-2.886-4.215-3.457-8.688-1.566-12.274 1.472-2.79 4.241-4.593 7.055-4.593 1.668 0 3.204 0.638 4.439 1.846 0.103 0.064 0.497 0.535 0.59 0.659 1.017 1.34 1.395 2.912 1.182 4.919 -0.374-3.863-2.871-5.271-5.219-5.271 -2.852 0-5.581 1.867-6.489 4.44 -0.638 1.809-0.888 5.502 4.603 9.93l0.146-0.134c-1.75-2.598-2.347-5.018-1.775-7.19 0.577-2.192 2.337-4.074 5.237-5.6 -2.102 3.184-0.972 7.345 1.311 9.902 2.368 2.658 7.015 4.122 13.083 4.121 9.51 0 19.561-3.474 22.882-7.908 2.887-3.866 2.608-10.002 2.232-12.271 3.171 3.053 4.943 8.707 4.871 15.585 -0.113 10.844-5.03 26.601-18.489 38.301 -5.133 4.465-10.948 8.174-16.572 11.762 -1.728 1.103-3.456 2.205-5.167 3.329 -21.479 14.074-16.134 26.021-10.476 38.668 0.681 1.521 1.385 3.096 2.029 4.654 5.482 7.098 4.38 13.164 2.493 17.009C34.99 274.007 25.921 278.474 19.273 278.474L19.273 278.474z'
                    fill='#b84131'
                    strokeWidth='none'
                    opacity='1'
                  />
                  <path
                    id='SvgjsPath3827'
                    d='M12.475 191.111c0.852-1.361 2.349-3.862 4.827-6.614 12.467-14.117 39.351-14.11 51.802-22.074 4.492-2.792 13.153-11.878 5.33-3.896 -7.607 7.618-16.997 10.345-36.132 15.341C18.656 178.969 14.58 188.9 12.45 191.035 12.463 190.377 12.466 190.111 12.475 191.111zM42.065 186.044c18.531-10.538 27.64-4.63 40.413-28.171 1.319-2.504 2.089-4.04 1.927-3.741 -14.254 28.508-25.318 17.027-51.257 37.2 -1.104 0.854-4.972 3.886-4.727 5.26C28.421 196.592 27.396 194.433 42.065 186.044zM60.336 161.681c8.71-1.954 14.749-6.304 13.749-5.729 -20.646 10.732-50.717-0.626-52.951 17.25C24.177 159.171 41.118 166.536 60.336 161.681zM14.671 242.974c1.967 2.627 5.455 6.543 7.947 11.192 1.007 2.038 1.655 3.269 1.536 3.021 -0.15-0.233-0.734-1.797-1.758-3.979 -5.519-10.923-26.096-32.407-9.883-48.119C0.955 215.395 5.45 230.647 14.671 242.974zM37.148 153.208c1.112 1.929 3.154 3.298 4.97 3.814 3.627 1.172-5.838-1.214-4.942-7.852 0.154-1.678 0.952-3.258 1.145-3.711C36.638 148.252 35.984 150.327 37.148 153.208z'
                    fill='#a92d1c'
                    strokeWidth='none'
                    opacity='1'
                  />
                  <path
                    id='SvgjsPath3828'
                    d='M24.172 184.311c-14.06 5.821-44.699 43.764-21.156 59.208l1.699 1.207c16.558 9.814 13.79 8.106 20.289 15.289 -4.825-5.396-11.641-8.378-18.119-11.143 -2.706-1.175-5.711-2.516-8.177-4.419 -5.273-3.865-7.719-8.127-8.96-13.253C-14.371 216.803 9.198 189.661 24.172 184.311zM18.99 212.724c-2.208 7.286-2.518 14.654 0.167 22.124 1.798 3.846-0.713-7.868-0.577-9.888 0.646-9.091 4.533-16.651 10.343-23.616 8.475-11.28 20.252-14.138 34.692-21.842C45.168 187.34 26.252 189.657 18.99 212.724zM71.565 158.462c-2.912 1.841-5.708 3.029-5.574 2.941 -20.028 7.146-49.126 4.403-56.009 31.838 0 0 0.205-0.613 0.567-1.694 0.548-1.896 2.616-6.506 5.634-9.749 8.07-8.863 21.092-10.477 29.116-12.297 4.584-1.002 10.72-2.457 15.161-3.974 11.71-4.021 17.587-10.996 19.145-15.144 0.121-0.286 0.216-0.501 0.292-0.666C79.197 151.03 76.515 155.457 71.565 158.462zM79.896 149.718C80.146 149.248 80.141 149.182 79.896 149.718L79.896 149.718zM47.45 160.992c9.354 0.252 18.606-0.313 27.512-6.406 5.241-3.517 7.248-8.298 6.702-13.057 -0.076-0.789-0.115-1.153-0.104-0.972 -0.027 0.342 0.266 2.631-0.726 5.634 -0.648 1.879-1.709 3.466-3.079 4.816 0.37-0.723 0.602-1.56 0.62-2.501 -0.194 0.341-0.401 0.674-0.636 0.988 -3.322 4.435-13.373 7.908-22.882 7.908 -6.068 0.001-10.714-1.463-13.083-4.121 -2.282-2.558-3.413-6.719-1.311-9.902 -0.345 0.182-0.672 0.369-0.985 0.561 -0.983 3.555-1.464 6.757 0.521 9.06 2.653 3.077 6.233 4.825 10.177 5.602 -5.993 0.279-11.489 0.254-15.006 0.646 -14.071 1.387-14.16 8.158-14.964 10.815C23.55 160.304 29.329 160.377 47.45 160.992zM31 146c1.601-4.003 5.766-5.438 9.929-5.34 -0.963-0.574-2.038-0.879-3.179-0.879 -2.814 0-5.583 1.803-7.055 4.593 -1.89 3.586-1.319 8.06 1.566 12.274l0.101 0.147 -0.178 0.009c-4.41 0.234-8.257 1.981-10.832 4.919 -1.894 2.159-2.872 4.774-2.684 7.174l0.006 0.081 -0.078 0.022c-12.741 3.783-21.175 9.794-24.39 17.383 -2.143 5.058-1.937 10.734 0.602 16.943 -2.575-15.776 6.479-28.02 24.293-32.77 -0.505-1.557 1.681-5.714 3.897-8.558 1.298-1.666 7-6 12-4C32 155 30 151 31 146z'
                    fill='#c75849'
                    strokeWidth='none'
                    opacity='1'
                  />
                  <path
                    id='SvgjsPath3829'
                    d='M79.819 136.945c0.458 2.279 0.748 8.596-2.16 12.49 -5.553 7.413-29.061 11.355-35.81 3.78 -2.465-2.763-3.387-7.021-1.07-10.11 -6.617 3.309-7.218 8.135-3.86 13.12 -14.194-11.442 6.99-20.876 6.99-7.99 0.402-2.144 0.317-4.209-1.02-5.97 0-0.011-0.01-0.03-0.03-0.04 -0.071-0.095-0.506-0.624-0.6-0.67 -6.176-6.035-18.103 3.432-10.08 15.149 -8.822 0.469-14.027 6.88-13.61 12.2 -20.399 6.058-32.254 18.669-22.41 37.55 0.053 0.4 0.104 0.791 0.22 1.41 -10.107 12.719-13.392 25.898-2.23 37.78 7.915 8.998 22.008 5.433 28.14 16.229 1.13 2.011 2.05 4.44 1.81 6.801 -2.576 4.933-9.791 8.206-12.48 7.13 9.597 9.559 39.416-7.206 24.64-26.32 -5.823-14.095-15.662-27.427 8.41-43.2 7.38-4.85 15.06-9.28 21.75-15.1C86.719 173.539 88.938 145.213 79.819 136.945zM18.599 169.165c0.025 0.389 0.171 1.045 0.26 1.38 -16.569 7.271-24.051 21.227-22.81 34.94C-12.354 187.513-0.388 175.129 18.599 169.165zM-3.331 207.405c0.02 0.021 0.03 0.04 0.04 0.061 0 0-0.02 0.01-0.02 0.02C-3.321 207.466-3.331 207.436-3.331 207.405zM71.899 183.785c-15.535 17.703-45.832 24.573-43.55 45.75 1.207 11.019 10.133 22.296 11.35 27.311 3.174 13.123-17.963 26.659-27.43 19.31 4.433 0.477 9.54-2.942 11.94-6.96 0.302-1.101 0.302-4.294-1.93-8.06 -5.682-9.708-17.007-7.609-25.5-14.44 -3.81-3.06-6.81-7.27-8.18-12 -3.542-12.195 5.291-22.773 8.35-27.4 0 0-0.357-0.704-0.4-0.79 -1.744-13.806 8.071-30.664 22.64-35.979 -0.044-0.089-0.22-1.106-0.22-1.74 -0.058-6.386 7.545-11.939 13.5-11.939 -7.29-12.228 3.765-20.163 9.51-15.08 0.046 0.022 0.415 0.359 0.58 0.58 0.02 0.01 0.04 0.029 0.04 0.05 0.97 1.14 1.33 2.56 1.35 4.03 -0.25-1.46-0.85-2.78-2.03-3.721 -3.075-4.464-20.004 4.023-3.53 14.99 -4.196-5.593-4.388-10.792 1.97-14.22 -1.868 2.829-1.264 6.942 1.13 9.819 5.876 7.062 22.977 4.923 30.75 1.011 5.573-2.813 9.361-6.896 7.93-16.73C89.706 148.64 81.552 172.8 71.899 183.785z'
                    fill='#8a1000'
                    strokeWidth='none'
                    opacity='1'
                  />
                </g>
              </g>
              <g
                id='svga-group-humanbody-single'
                className={styles[`body-motion${bodyClass}`]}
              >
                <path
                  id='SvgjsPath2780'
                  d='M190.858 199.866c-6.008-10.158-13.474-11.973-19.628-13.936 -6.323-2.016-19.346-3.178-26.449-4.6 -6.86-1.373-23.153-5.789-23.339-13.488 -0.192-8.066 4.291-40.09 4.291-40.09H74.005c0 0 4.487 32.023 4.294 40.09 -0.184 7.699-16.48 12.115-23.341 13.488 -7.104 1.422-20.125 2.584-26.448 4.6 -6.156 1.963-13.624 3.777-19.632 13.936 -3.644 6.16-6.008 16.133-6.008 27.133h194C196.869 215.999 194.509 206.026 190.858 199.866z'
                  fill='#f5af95'
                  strokeWidth='none'
                  opacity='1'
                  stroke='none'
                />
                <path
                  id='SvgjsPath2781'
                  d='M121.442 167.843c2.495 10.929 18.165 13.698 26.293 15.325 21.909 4.379 33.772 5.134 42.297 19.539 2.903 4.916 5.459 15.864 5.962 24.153 1.835 0.291 0.531-17.432-5.136-26.994 -9.742-16.472-29.089-15.135-46.077-18.535C137.921 179.958 121.628 175.542 121.442 167.843L121.442 167.843zM78.558 167.843c-0.186 7.699-16.479 12.115-23.339 13.488 -16.988 3.4-36.335 2.063-46.077 18.535 -5.667 9.563-6.971 27.285-5.136 26.994 0.503-8.289 3.059-19.237 5.962-24.153 8.524-14.405 20.388-15.16 42.297-19.539C60.393 181.541 76.063 178.771 78.558 167.843L78.558 167.843z'
                  fill='#ffc9b5'
                  strokeWidth='none'
                  opacity='1'
                  stroke='none'
                />
                <path
                  id='SvgjsPath2782'
                  d='M51.206 189.513c0 0 28.641 0.299 33.473 1.885 2.314 0.758 8.372 5.633 8.372 5.633s-6.556-3.17-8.658-3.758C79.51 191.909 51.206 189.513 51.206 189.513zM99.795 199.999c2.053-0.041 7.887-3.799 7.887-3.799s-5.574 2.059-7.342 2.16c-1.491 0.086-6.366-1.238-6.366-1.238S98.112 200.032 99.795 199.999zM117.008 192.757c6.75-1.818 29.786-3.23 29.786-3.23s-23.791-0.516-30.51 1.725c-2.252 0.752-7.562 5.16-7.562 5.16S114.786 193.354 117.008 192.757z'
                  fill='#e69375'
                  strokeWidth='none'
                  opacity='1'
                  stroke='none'
                />
                <path
                  id='SvgjsPath2783'
                  d='M190.858 199.866c-9.741-16.471-29.122-15.142-46.077-18.535 -6.86-1.373-23.153-5.789-23.339-13.488 -0.192-8.066 4.291-40.09 4.291-40.09H74.005c0 0 4.487 32.023 4.294 40.09 -0.184 7.699-16.48 12.115-23.341 13.488 -7.104 1.422-20.125 2.584-26.448 4.6 -6.156 1.963-13.624 3.777-19.632 13.936 -3.644 6.16-6.008 16.133-6.008 27.133h194C196.869 215.999 194.509 206.026 190.858 199.866z'
                  fill='none'
                  stroke='#c7633d'
                  strokeWidth='1.5'
                  opacity='1'
                />
              </g>
              <g
                id='svga-group-chinshadow-single'
                className={styles[`body-motion${bodyClass}`]}
              >
                <path
                  id='SvgjsPath3857'
                  d='M74.767 128.517c0.594 4.297 3.11 22.794 3.929 33.496 6.172 3.567 11.423 8.992 21.307 8.992 9.736 0 14.976-5.264 21.031-8.831 0.805-10.679 3.341-29.34 3.938-33.657l0.017-0.113H74.751L74.767 128.517z'
                  fill='url(#SvgjsLinearGradient3858)'
                  opacity='1'
                />
              </g>
              <g
                id='svga-group-clothes-single'
                className={styles[`body-motion${bodyClass}`]}
              >
                <path
                  id='SvgjsPath3811'
                  d='M4.299 238.659c-0.18-1-2.264-16.415-2.47-22.946 -0.294-9.499 1.371-23.079 10.881-22.987 10.824-7.524 29.089-14.021 41.718-17.795 7.903-8.587 9.483-11.971 22.612-17.874l-0.01-0.127c1.513 10.484 2.967 15.62-8.844 19.862 -1.893 2.63-3.665 5.194-6.158 8.787 3.793 20.511 4.981 34.739 5.444 53.437 0 0 3.771 0.011 65.288-0.271 2.066-21.594-0.221-33.876 4.806-53.726 0 0-4.021-4.846-6.726-8.573 -11.595-4.517-9.139-11.206-8.146-19.353 10.072 4.714 13.179 8.309 21.653 17.281 6.702 1.904 13.776 3.962 20.646 6.653 9.097 3.563 20.648 10.538 21.648 11.366 3.7-0.107 5.789 1.931 7.347 5.283 5.044 10.821 3.85 26.385 2.034 41.358C178.207 239.065 55.08 241.174 4.299 238.659z'
                  fill='#152c5e'
                  strokeWidth='none'
                  opacity='1'
                />
                <path
                  id='SvgjsPath3812'
                  d='M77.464 159.895c0.149 1.034 0.284 2.015 0.383 2.938 -0.204 0.257-15.968 22.574-16.084 22.742C65.661 176.392 71.143 166.878 77.464 159.895zM122.424 159.895c-0.148 1.034-0.172 2.015-0.271 2.938 0.203 0.257 15.799 21.719 15.914 21.887C133.938 176.165 128.746 166.878 122.424 159.895zM158.775 189.93c-3.994 6.022-4.847 8.102-9.219 14.07 1 0 2.612 0.162 3.612 0.162C156.588 198.086 156.594 194.993 158.775 189.93zM162.868 233.644c3.54-8.603 6.471-16.152 10.022-24.768l-1.164-1.946C168.77 215.778 165.631 224.77 162.868 233.644zM46.831 204.162c1 0 2.612-0.162 3.612-0.162 -4.372-5.969-5.225-6.342-9.219-12.364C43.406 196.699 43.412 198.086 46.831 204.162zM28.273 206.93l-1.164 1.946c3.552 8.615 4.447 16.165 7.987 24.768C32.333 224.77 31.23 215.778 28.273 206.93z'
                  fill='#0a1f4f'
                  strokeWidth='none'
                  opacity='1'
                />
                <path
                  id='SvgjsPath3813'
                  d='M77.059 169.855c-0.83 2.3-3.59 4.11-5.59 5.25 -0.97 0.55-1.99 1.02-3.02 1.46 0.47-0.68 0.95-1.36 1.44-2.03 2.32-3.24 4.58-6.5 6.75-9.85 0.31-0.48 0.61-0.97 0.91-1.46C77.709 165.396 77.889 167.875 77.059 169.855zM123.169 170.306c-1.26-2.11-1.14-4.94-1-7.351 2.3 4.101 4.72 8.11 7.45 11.971 0.28 0.399 0.56 0.79 0.85 1.18C127.549 174.795 124.829 173.096 123.169 170.306z'
                  fill='#01153f'
                  strokeWidth='none'
                  opacity='1'
                />
                <path
                  id='SvgjsPath3814'
                  d='M122.672 157.263c0.007-0.057 0.015-0.112 0.021-0.169 16.884 9.666 24.725 22.013 36.082 32.836 -0.418 0.697-1.146 1.155-1.573 1.843C145.308 182.397 141.597 170.396 122.672 157.263zM75.469 157.905c-14.219 4.537-32.507 31.672-34.445 33.519 0.418 0.697 0.645 0.558 1.073 1.245C53.992 183.294 54.309 172.286 75.469 157.905zM193.988 197.678c-1.558-3.353-3.646-5.391-7.347-5.283 -1-0.828-12.552-7.804-21.648-11.366 -6.636-2.6-13.705-3.761-20.203-5.61 31.446 15.756 44.648 20.435 50.14 26.017C194.642 200.654 194.332 198.416 193.988 197.678zM10 198c14.511-7.683 26.714-13.407 44.203-23.001 -12.62 3.784-30.732 10.246-41.493 17.727 -7.185-0.069-9.89 7.664-10.658 15.546C5.147 202.205 6.798 200.401 10 198z'
                  fill='#233b6d'
                  strokeWidth='none'
                  opacity='1'
                />
                <path
                  id='SvgjsPath3815'
                  d='M197.589 214.005c-0.21-5.52-1.16-11.329-3.51-16.369 -1.24-2.67-2.91-4.83-5.979-5.24 -0.36-0.05-0.721-0.08-1.08-0.09 -0.11-0.011-0.23-0.021-0.341-0.011 -0.069-0.06-0.149-0.1-0.22-0.149 -2.31-1.47-4.7-2.82-7.01-4.17 -4.66-2.721-9.39-5.07-14.42-7.04 -6.74-2.641-13.66-4.67-20.61-6.63 -0.79-0.83-1.59-1.67-2.38-2.511 -3.51-3.729-6.99-7.409-11.24-10.319 -2.3-1.58-4.75-2.92-7.27-4.101 -0.271-0.13-0.54-0.25-0.811-0.38 -0.029-0.02-0.069-0.029-0.109-0.05 -0.021 0.2-0.05 0.39-0.08 0.58 -0.2 1.33-0.42 2.67-0.58 4 -0.04 0.29-0.07 0.57-0.1 0.86 -0.011 0.149-0.03 0.29-0.04 0.439 -0.23 2.66-0.32 5.66 1.159 8 1.82 2.87 4.7 4.49 7.79 5.68 2.011 2.771 4.12 5.431 6.36 8.061 0.12 0.14 0.24 0.28 0.35 0.43 -0.939 3.71-1.59 7.51-2.17 11.28 -0.819 5.42-1.35 10.84-1.489 16.32 -0.15 5.449-0.011 10.939-0.311 16.39 -0.17 3.22-0.53 6.44-0.83 9.66 -1.069 0-2.14 0.01-3.21 0.01 -10.58 0.05-21.149 0.1-31.72 0.15 -10.06 0.05-20.11 0.08-30.17 0.109 -0.21-9.699-0.71-19.359-1.81-29.01 -0.58-5.01-1.06-10.04-1.95-15.01 -0.55-3.09-1.1-6.18-1.7-9.26 2.03-2.92 4.05-5.851 6.11-8.75 3.65-1.311 7.29-3.131 9.13-6.58 1.14-2.16 0.78-5.261 0.54-7.65 -0.01-0.1-0.02-0.189-0.03-0.29 -0.03-0.27-0.05-0.53-0.09-0.79 -0.15-1.359-0.36-2.72-0.55-4.07 -0.04-0.199-0.06-0.39-0.09-0.59 -0.05 0.021-0.09 0.04-0.13 0.051 -0.29 0.13-0.58 0.25-0.87 0.369 -2.75 1.17-5.42 2.521-7.9 4.181 -2.34 1.56-4.5 3.33-6.53 5.27 -1.99 1.91-3.76 4.09-5.6 6.141 -0.57 0.64-1.14 1.27-1.7 1.909 -1.31 0.391-2.61 0.801-3.91 1.2 -4.93 1.53-9.75 3.29-14.58 5.11 -2.61 0.99-5.18 2.07-7.75 3.16 -2.38 1.02-4.81 2.01-7.07 3.279 -2.51 1.4-5.09 2.86-7.56 4.48 -0.18 0.11-0.36 0.229-0.54 0.35 -0.11 0.07-0.21 0.141-0.31 0.21 -0.6-0.01-1.2 0.03-1.79 0.15 -3.79 0.729-6.07 4.16-7.31 7.55 -1.79 4.891-2.01 10.24-1.85 15.391 0.17 5.38 0.92 10.71 1.56 16.039 0.27 2.271 0.57 4.53 0.9 6.79 0 0.07 0.01 0.141 0.03 0.21 0.61 0.03 1.22 0.061 1.83 0.091 4.09 0.21 8.18 0.39 12.27 0.479 16.34 0.37 32.69 0.65 49.03 0.71 0.08 0 0.16 0 0.24 0 4.1 0.01 8.19 0.01 12.29-0.01 11.2-0.06 22.4-0.11 33.61-0.16 6.36-0.03 12.72-0.06 19.08-0.1 0.09 0 0.18 0 0.27-0.011 5.011-0.02 10.021-0.06 15.03-0.119 15.45-0.16 30.91-0.36 46.36-0.48 0.63-0.01 1.25-0.02 1.88-0.02 0.02-0.131 0.029-0.25 0.04-0.381 0.279-2.46 0.529-4.93 0.76-7.39C197.449 225.565 197.81 219.835 197.589 214.005zM77.059 169.855c-0.83 2.3-3.59 4.11-5.59 5.25 -0.97 0.55-1.99 1.02-3.02 1.46 0.47-0.68 0.95-1.36 1.44-2.03 2.32-3.24 4.58-6.5 6.75-9.85 0.31-0.48 0.61-0.97 0.91-1.46C77.709 165.396 77.889 167.875 77.059 169.855zM64.689 238.926c-12.94 0.029-25.88 0.06-38.82-0.011 -0.1 0-0.19 0-0.29 0 -6.52-0.04-13.03-0.16-19.55-0.319 -0.29-2.9-0.59-5.811-0.94-8.71 -0.69-5.681-1.44-11.36-1.4-17.101 0.03-5.2 0.18-11.33 3.06-15.859 1.11-1.75 2.74-2.95 4.65-3.421 0.54-0.14 1.11-0.22 1.7-0.22 0.01-0.01 0.01-0.01 0.02 0 0.31 2.05 0.66 4.09 1.01 6.141 0.36 2.159 0.64 4.34 1.22 6.449 0.62 2.19 1.25 4.38 1.95 6.551 1.3 4 2.59 8 3.85 12.02 1.26 4.06 3.14 7.86 4.73 11.79 -1.11-4.08-2.59-8.04-3.6-12.14 -0.99-3.98-2.25-7.83-3.53-11.721 -0.37-1.12-0.71-2.239-1.03-3.37 -0.94-3.229-1.72-6.47-2.45-9.77 -0.49-1.98-0.96-3.96-1.44-5.94 -0.03-0.119-0.06-0.229-0.09-0.35 0.12-0.06 0.24-0.12 0.35-0.18 0.28-0.15 0.56-0.29 0.83-0.431 2.67-1.39 5.35-2.76 8.08-4.02 4.87-2.23 9.93-4.21 14.94-6.11 5.05-1.91 10.08-3.859 15.1-5.85 -2.34 2.63-4.66 5.27-6.93 7.96 -1.78 2.11-3.35 4.35-4.84 6.64 -0.14 0.21-0.28 0.42-0.41 0.641 0.11 0.189 0.23 0.37 0.36 0.56 2.54 3.89 5.15 7.76 7.83 11.561 -2.62 0.22-5.24 0.47-7.85 0.789 -3.51 0.431-6.99 0.931-10.44 1.721 -0.73 0.17-1.46 0.33-2.2 0.479 -0.31 0.07-0.62 0.141-0.94 0.2 0.07 0.2 0.13 0.41 0.19 0.61 2.53 8.71 4.24 17.66 7.32 26.22 -0.87-5.3-1.74-10.57-2.98-15.8 -0.72-2.99-1.52-5.96-2.6-8.851 -0.21-0.58-0.45-1.149-0.7-1.72 0.7-0.1 1.4-0.22 2.1-0.35 3.52-0.63 7.04-1.2 10.59-1.63 2.64-0.32 5.26-0.71 7.88-1.141 0.39-0.06 0.78-0.12 1.17-0.189 -0.09-0.15-0.18-0.301-0.27-0.45 -1.07-1.82-2.21-3.601-3.41-5.36 -1.66-2.33-3.38-4.56-5.18-6.74 1.78-2.289 3.72-4.42 5.72-6.529 3.1-3.271 6.08-6.63 9.08-9.99 0.26-0.3 0.53-0.61 0.8-0.91 0.06-0.06 0.11-0.13 0.17-0.189 3.5-3.95 6.95-7.83 11.19-11.051 2.44-1.869 5.06-3.47 7.78-4.93 0.2-0.11 0.39-0.21 0.59-0.31 0.14 1.47 0.3 2.939 0.4 4.42 -2.85 4.09-5.75 8.149-8.67 12.21 -0.74 1.02-1.46 2.05-2.17 3.08 -0.04 0.05-0.08 0.109-0.12 0.16 -1.58 2.3-3.12 4.63-4.61 6.989 -0.13 0.21-0.26 0.41-0.39 0.62 0.05 0.42 0.09 0.83 0.14 1.24 0.97 9.04 1.84 18.09 2.86 27.13 0.95 8.49 1.65 17 2.7 25.47C66.359 238.926 65.529 238.926 64.689 238.926zM123.169 170.306c-1.26-2.11-1.14-4.94-1-7.351 2.3 4.101 4.72 8.11 7.45 11.971 0.28 0.399 0.56 0.79 0.85 1.18C127.549 174.795 124.829 173.096 123.169 170.306zM189.979 238.695c-5.431-0.03-10.87-0.06-16.301-0.08 -13.55-0.04-27.09-0.03-40.63 0.03 0.11-0.62 0.23-1.25 0.34-1.87 0.551-3.04 1.25-6.12 1.45-9.2 0.37-5.479 0.511-10.939 0.66-16.43 0.14-5.41 0.78-10.811 1.32-16.18 0.319-3.141 0.64-6.29 1.12-9.41 0.06-0.41 0.12-0.811 0.189-1.21 -0.1-0.15-0.21-0.29-0.319-0.44 -0.021-0.02-0.03-0.04-0.051-0.06 -1.71-2.23-3.46-4.42-5.149-6.66 -0.07-0.09-0.141-0.181-0.21-0.271 -0.65-0.859-1.29-1.729-1.91-2.609 -2.851-4.04-5.561-8.181-8.25-12.33 0.1-1.46 0.28-2.91 0.42-4.37 0.18 0.11 0.37 0.21 0.55 0.32 2.45 1.43 4.84 2.97 7.061 4.739 4.069 3.24 7.569 6.99 11.1 10.771 0.01 0.01 0.02 0.03 0.03 0.04 0.29 0.31 0.58 0.62 0.87 0.93 3.14 3.35 6.3 6.68 9.6 9.88 2 1.94 4.09 3.78 6.15 5.66 -0.36 0.44-0.71 0.88-1.061 1.33 -1.56 2.02-2.88 4.27-4.25 6.42 -1.189 1.96-2.32 3.94-3.39 5.96 -0.08 0.14-0.15 0.28-0.22 0.42 0.369 0.07 0.739 0.141 1.109 0.2 2.8 0.51 5.62 0.97 8.44 1.36 4.1 0.569 8.18 1.26 12.279 1.8 -0.229 0.43-0.439 0.859-0.649 1.29 -1.34 2.75-2.43 5.84-3.351 8.75 -1.699 5.359-3.06 10.72-4.06 16.26 1.01-2.63 1.94-5.28 2.87-7.93 0.99-2.84 1.8-5.761 2.83-8.59 1.16-3.211 2.29-6.431 3.41-9.65 0.069-0.19 0.13-0.37 0.199-0.561 -0.319-0.05-0.64-0.109-0.949-0.159 -4.15-0.75-8.29-1.521-12.471-2.11 -2.729-0.38-5.479-0.69-8.229-0.96 2.81-4.36 5.47-8.81 8.13-13.26 0.1-0.181 0.21-0.351 0.31-0.521 -0.159-0.2-0.33-0.39-0.51-0.58 -2.01-2.25-4.109-4.439-6.149-6.68 -2.16-2.38-4.37-4.72-6.591-7.05 6.46 2.38 12.95 4.66 19.381 7.109 4.77 1.82 9.3 4.23 13.85 6.54 2.03 1.021 4.11 2 6.16 3.04 0.24 0.11 0.479 0.23 0.71 0.351 0.149 0.08 0.29 0.149 0.43 0.229 -0.57 2.19-1.38 4.29-2.11 6.431 -1.05 3.08-1.88 6.22-2.779 9.35 -0.37 1.27-0.75 2.54-1.16 3.8 -1.37 4.17-2.66 8.32-3.73 12.59 -0.93 3.7-1.859 7.41-2.779 11.11 2.979-7.91 5.47-15.97 8.08-24.01 1.409-4.34 2.47-8.771 3.68-13.17 0.53-1.931 1.03-3.84 1.4-5.79 0.029-0.15 0.06-0.3 0.09-0.46 0.229 0.02 0.449 0.05 0.67 0.1 0.59 0.1 1.149 0.271 1.689 0.49 1.36 0.56 2.311 1.71 3.011 3.07 0.02 0.029 0.029 0.06 0.05 0.09 0.79 1.56 1.25 3.38 1.63 4.859 2.66 10.36 1.72 21.28 0.75 31.78 -0.17 1.85-0.33 3.69-0.48 5.54C192.839 238.716 191.409 238.705 189.979 238.695z'
                  fill='#000f30'
                  strokeWidth='none'
                  opacity='1'
                />
              </g>
              <g id='svga-group-head' transform='matrix(1,0,0,1,0,0)'>
                <g
                  id='svga-group-ears-left-move'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g id='svga-group-ears-left' transform='matrix(1,0,0,1,0,0)'>
                    <path
                      id='SvgjsPath3656'
                      d='M45.671 83.846c-1.485-2.408-6.327-8.995-10.031-8.071 -3.012 0.755-2.973 4.861-3.206 7.289 -0.34 3.563-0.464 9.771 0.525 12.29 0.951 2.418 3.96 7.092 5.828 8.874 2.299 2.185 5.97 9.15 6.422 9.872 0.711 1.142 2.137 2.776 4.325 2.647 3.071-0.181 5.724-3.018 5.965-4.386C56.8 104.941 49.536 90.11 45.671 83.846z'
                      fill='#f5af95'
                      stroke='#c7633d'
                      strokeWidth='1.5'
                      opacity='1'
                    />
                    <path
                      id='SvgjsPath3657'
                      d='M44.2 98.511c-0.143-0.55 0.007-1.479 0.154-2.375 0.133-0.817 0.258-1.588 0.182-2.134 -0.289-2.043-1.915-5.926-2.976-8.03 -1.223-2.421-3.199-5.471-5.679-6.257 -1.024-0.326-1.699 0.063-2.089 0.458 -0.288 0.29-0.353 0.63-0.259 0.671 0.095 0.04 0.307-0.242 0.617-0.508 0.254-0.217-0.508-0.039 0 0 -0.205 1.017-0.865 6.162-0.41 9.918 0.358 2.955 1.05 5.162 1.263 5.492 0.031 0.349 0.083 0.689 0.16 1.02 1.002 4.312 7.518 9.95 9.034 11.557 0.28 0.296 0.574 0.473 0.646 0.4 0.072-0.073-0.101-0.365-0.379-0.664 -1.498-1.595-7.971-7.214-8.939-11.375 -1.027-4.414 3.912-10.958 4.699-12.343 0.401 0.65 0.742 1.274 1.004 1.795 0.207 0.408 0.434 0.886 0.67 1.403 -0.463 0.721-5.118 5.992-3.934 10.21 0.438 1.556 3.822 3.561 5.131 4.11 0.72 0.303 0.99 0.754 1.304 1.277 0.364 0.608 0.033 2.179 1.23 2.677 0.244 0.103 0.464 0.144 0.659 0.144 0.338 0 0.594-0.127 0.783-0.278 0.02 0.266 0.019 0.605 0.009 0.921 -0.012 0.407 0.047 0.596 0.148 0.604 0.103 0.008 0.21-0.17 0.223-0.574 0.017-0.5 0.014-1.116-0.077-1.412 -0.269-0.868-1.088-1.851-1.957-2.89C44.563 101.304 44.422 99.364 44.2 98.511zM34.969 94.688c-2.348-6.77 1.283-12.936 1.81-13.865 1.012 0.39 2.562 2.145 3.221 3.163C39.52 84.802 35.067 90.135 34.969 94.688zM45.772 105.475c-1.084-0.451-0.706-1.939-1.056-2.525 -0.318-0.531-0.646-1.078-1.479-1.429 -0.18-0.076-0.379-0.191-0.583-0.325 -2.682-5.939 0.293-8.537 1.039-9.068 0.229 0.726 0.399 1.392 0.476 1.926 0.068 0.49-0.059 1.27-0.181 2.023 -0.153 0.934-0.31 1.901-0.147 2.526 0.244 0.931 0.411 2.904 1.291 3.958 0.781 0.935 1.583 1.899 1.857 2.685C46.871 105.403 46.5 105.778 45.772 105.475z'
                      fill='#c7633d'
                      strokeWidth='none'
                      opacity='1'
                    />
                  </g>
                </g>
                <g
                  id='svga-group-ears-right-move'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g id='svga-group-ears-right' transform='matrix(1,0,0,1,0,0)'>
                    <path
                      id='SvgjsPath3658'
                      d='M154.066 83.846c1.486-2.408 6.328-8.995 10.031-8.071 3.012 0.755 2.973 4.861 3.207 7.289 0.34 3.563 0.463 9.771-0.525 12.29 -0.951 2.418-3.961 7.092-5.828 8.874 -2.299 2.185-5.971 9.15-6.422 9.872 -0.711 1.142-2.137 2.776-4.326 2.647 -3.07-0.181-5.723-3.018-5.965-4.386C142.938 104.941 150.203 90.11 154.066 83.846z'
                      fill='#f5af95'
                      stroke='#c7633d'
                      strokeWidth='1.5'
                      opacity='1'
                    />
                    <path
                      id='SvgjsPath3659'
                      d='M154.322 102.327c-0.869 1.039-1.688 2.022-1.957 2.89 -0.092 0.296-0.094 0.912-0.078 1.412 0.014 0.404 0.121 0.582 0.225 0.574 0.102-0.008 0.16-0.196 0.148-0.604 -0.01-0.315-0.012-0.655 0.008-0.921 0.189 0.151 0.445 0.278 0.783 0.278 0.195 0 0.416-0.041 0.66-0.144 1.195-0.498 0.865-2.068 1.229-2.677 0.314-0.523 0.584-0.975 1.305-1.277 1.309-0.549 4.693-2.554 5.131-4.11 1.184-4.218-3.471-9.489-3.934-10.21 0.234-0.517 0.463-0.995 0.668-1.403 0.264-0.521 0.604-1.145 1.006-1.795 0.787 1.384 5.725 7.929 4.699 12.343 -0.969 4.161-7.441 9.781-8.939 11.375 -0.279 0.299-0.453 0.591-0.381 0.664 0.074 0.072 0.367-0.104 0.646-0.4 1.516-1.606 8.031-7.245 9.033-11.557 0.078-0.33 0.131-0.671 0.162-1.02 0.211-0.331 0.904-2.537 1.262-5.492 0.455-3.756-0.205-8.901-0.41-9.918 0.508-0.039-0.254-0.217 0 0 0.311 0.266 0.523 0.548 0.617 0.508 0.094-0.041 0.029-0.381-0.258-0.671 -0.391-0.394-1.066-0.784-2.09-0.458 -2.48 0.786-4.457 3.836-5.68 6.257 -1.061 2.104-2.686 5.987-2.975 8.03 -0.076 0.546 0.049 1.317 0.182 2.134 0.146 0.896 0.297 1.824 0.154 2.375C155.316 99.364 155.176 101.304 154.322 102.327zM159.738 83.987c0.66-1.019 2.209-2.773 3.221-3.163 0.527 0.929 4.158 7.095 1.811 13.865C164.672 90.135 160.219 84.802 159.738 83.987zM152.75 105.246c0.273-0.785 1.076-1.75 1.857-2.685 0.879-1.053 1.047-3.026 1.291-3.958 0.162-0.625 0.006-1.592-0.146-2.526 -0.123-0.754-0.25-1.534-0.182-2.023 0.076-0.535 0.246-1.201 0.475-1.926 0.746 0.531 3.721 3.128 1.039 9.068 -0.203 0.133-0.402 0.249-0.584 0.325 -0.832 0.351-1.16 0.898-1.479 1.429 -0.35 0.586 0.029 2.074-1.055 2.525C153.238 105.778 152.867 105.403 152.75 105.246z'
                      fill='#c7633d'
                      strokeWidth='none'
                      opacity='1'
                    />
                  </g>
                </g>
                <g
                  id='svga-group-faceshape-wrap'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g id='svga-group-faceshape-single'>
                    <path
                      id='SvgjsPath3854'
                      d='M100.002 0.867C66.384 0.919 39.082 28.09 39.134 61.564c0.009 5.316 0.704 10.471 2.002 15.382h0.001c0.012 0.053 8.12 35.231 11.82 46.756 2.775 8.646 14.288 21.634 22.398 24.913 7.826 3.165 13.039 10.654 24.646 10.654s16.82-7.489 24.646-10.654c8.11-3.279 19.624-16.268 22.398-24.913 3.7-11.524 11.809-46.703 11.819-46.756h0.002c1.298-4.911 1.994-10.066 2.002-15.382C160.923 28.09 133.62 0.919 100.002 0.867z'
                      fill='#f5af95'
                      strokeWidth='none'
                      opacity='1'
                    />
                    <path
                      id='SvgjsPath3855'
                      d='M140.727 16.481c10.424 10.984 16.867 26.145 16.844 42.883 -0.009 5.316-0.666 10.471-1.894 15.382h-0.001c-0.011 0.053-7.681 35.231-11.18 46.756 -2.623 8.646-13.515 21.634-21.184 24.913 -7.403 3.164-12.333 10.654-23.31 10.654 -10.978 0-15.908-7.49-23.309-10.654 -7.671-3.279-18.56-16.268-21.184-24.913 -3.5-11.524-11.168-46.703-11.18-46.756h-0.001c-1.229-4.911-1.886-10.066-1.894-15.382 -0.025-16.736 6.418-31.896 16.84-42.88 -12.382 11.111-20.168 27.193-20.141 45.08 0.009 5.316 0.704 10.471 2.002 15.382h0.001c0.012 0.053 8.12 35.231 11.82 46.756 2.775 8.646 14.288 21.634 22.398 24.913 7.826 3.165 13.039 10.654 24.646 10.654s16.82-7.489 24.646-10.654c8.11-3.279 19.624-16.268 22.398-24.913 3.7-11.524 11.809-46.703 11.819-46.756h0.002c1.298-4.911 1.994-10.066 2.002-15.382C160.898 43.676 153.111 27.593 140.727 16.481z'
                      fill='#eda184'
                      strokeWidth='none'
                      opacity='1'
                    />
                    <path
                      id='SvgjsPath3856'
                      d='M100.002 0.867C66.384 0.919 39.082 28.09 39.134 61.564c0.009 5.316 0.704 10.471 2.002 15.382h0.001c0.012 0.053 8.12 35.231 11.82 46.756 2.775 8.646 14.288 21.634 22.398 24.913 7.826 3.165 13.039 10.654 24.646 10.654s16.82-7.489 24.646-10.654c8.11-3.279 19.624-16.268 22.398-24.913 3.7-11.524 11.809-46.703 11.819-46.756h0.002c1.298-4.911 1.994-10.066 2.002-15.382C160.923 28.09 133.62 0.919 100.002 0.867z'
                      fill='none'
                      stroke='#c7633d'
                      strokeWidth='1.5'
                      opacity='1'
                    />
                  </g>
                </g>
                <g
                  id='svga-group-mouth-single-move'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g
                    id='svga-group-mouth-single'
                    transform='matrix(1,0,0,1,0,0)'
                  >
                    <path
                      id='SvgjsPath3910'
                      data-testid='mouth-lips'
                      className={styles[`lips${mouthClass}-1`]}
                      d='M100.002 141.435c-4.158 0-5.133-3.232-5.133-3.232h10.267C105.136 138.202 103.659 141.435 100.002 141.435z'
                      fill='url(#SvgjsLinearGradient3911)'
                      opacity='1'
                    />
                    <path
                      id='SvgjsPath6293'
                      className={styles[`teeth${mouthClass}`]}
                      d='M112.127 131.943c0 0.625-7.773 3.456-12.258 3.575 -4.18 0.112-12.333-2.682-12.333-3.575 0-0.892 6.441-1.558 12.729-1.558C106.555 130.386 112.127 131.052 112.127 131.943z'
                      fill='#ffffff'
                      strokeWidth='none'
                      opacity='1'
                    />
                    <path
                      id='SvgjsPath3914'
                      className={styles[`lips${mouthClass}-2`]}
                      d='M87.536 132.96c2.756-0.951 6.239-3.625 8.432-3.723 1.133-0.051 2.351 0.87 3.574 1.166 0.851 0.207 3.264-1.156 4.13-1.166 2.272-0.022 6.326 2.771 8.769 3.723 0.135 0.055 0 0 0 0s-5.056 6.021-12.452 6.021C91.618 138.98 87.536 132.96 87.536 132.96S87.399 133.01 87.536 132.96z'
                      fill='#f771a9'
                      stroke='#e85391'
                      strokeWidth='0.75'
                      opacity='1'
                    />
                    <path
                      id='SvgjsPath3915'
                      className={styles[`lips${mouthClass}-3`]}
                      d='M112.808 132.902c-0.187-0.076-0.606-0.028-0.753-0.021 -0.304 0.016-0.546-0.117-1.214-0.129 -0.742-0.012-3.945-0.268-5.003-0.338 -2.129-0.143-3.824 0.666-5.848 0.666 -2.025 0-3.868-0.883-5.996-0.74 -1.057 0.072-4.113 0.395-4.857 0.412 -0.663 0.019-0.923 0.133-1.231 0.12 -0.143-0.007-0.595-0.05-0.771 0.05 -0.147 0.086-0.09 0.559 0.027 0.683 0.285 0.298 1.397-0.233 1.959-0.22 0.777 0.017 3.843-0.05 4.917-0.121 2.081-0.142 3.936 0.821 5.952 0.821s3.725-0.889 5.806-0.749c1.071 0.072 4.281 0.064 5.06 0.049 0.563-0.014 1.764 0.449 2.052 0.22C113.043 133.495 112.972 132.969 112.808 132.902z'
                      fill='#c92066'
                      strokeWidth='none'
                      opacity='1'
                      stroke='none'
                    />
                    <path
                      id='SvgjsPath3916'
                      className={styles[`lips${mouthClass}-4`]}
                      d='M99.989 137.439c-3.37 0-6.645-1.154-9.241-3.306 1.307-0.072 2.652-0.277 3.961-0.219 1.613 0.07 3.144 0.705 4.756 0.813 1.742 0.116 3.358-0.488 5.064-0.695 1.422-0.171 2.931 0.059 4.357 0.111C106.335 136.101 103.244 137.439 99.989 137.439zM104.78 131.682c1.313-0.08 2.661 0.088 3.974 0.141 -1.43-0.712-2.953-1.553-4.549-1.807 -1.374-0.218-2.71 0.882-4.045 1.104 -1.506 0.25-2.69-1.15-4.16-1.15 -1.592 0.07-3.198 1.099-4.576 1.805 1.282-0.076 2.6-0.263 3.884-0.141 1.572 0.147 3.094 0.714 4.682 0.714C101.612 132.348 103.161 131.78 104.78 131.682z'
                      fill='#ff8ebd'
                      strokeWidth='none'
                      opacity='1'
                      stroke='none'
                    />
                    <path
                      id='SvgjsPath3917'
                      className={styles[`lips${mouthClass}-5`]}
                      d='M99.941 136.486c-2.029 0-4.007-0.701-5.707-2.001 0.38-0.037 0.764-0.066 1.133-0.066 0.117 0 0.234 0.003 0.351 0.009 0.609 0.033 1.209 0.208 1.846 0.394 0.618 0.178 1.256 0.363 1.923 0.419 0.132 0.012 0.264 0.016 0.395 0.016 0.819 0 1.596-0.204 2.348-0.399 0.477-0.126 0.928-0.245 1.392-0.313 0.253-0.04 0.527-0.058 0.837-0.058 0.268 0 0.544 0.014 0.818 0.034C103.862 135.572 102.03 136.486 99.941 136.486z'
                      fill='#ffa8cc'
                      strokeWidth='none'
                      opacity='1'
                      stroke='none'
                    />
                  </g>
                </g>
                <g
                  id='svga-group-eyes-left-move'
                  transform='matrix(1,0,0,1,0,0)'
                  className={styles[`eye-back-iris${leftEyeClass}`]}
                >
                  <g id='svga-group-eyes-left' transform='matrix(1,0,0,1,0,0)'>
                    <g id='svga-group-eyesback-left'>
                      <path
                        id='SvgjsPath3186'
                        d='M61.952 84.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.798 91.758 63.174 90.04 61.952 84.523z'
                        fill='url(#SvgjsRadialGradient3187)'
                        opacity='1'
                      />
                    </g>
                    <g
                      id='svga-group-eyesiriswrapper-left'
                      className={styles[`eye-iris${leftEyeClass}`]}
                      transform='matrix(1,0,0,1,-0.75,-0.5)'
                    >
                      <g
                        id='svga-group-eyesiriscontrol-left'
                        transform='matrix(1,0,0,1,0,0)'
                      >
                        <g
                          id='svga-group-eyesiris-left'
                          transform='matrix(1,0,0,1,0,0)'
                        >
                          <path
                            id='SvgjsPath3844'
                            d='M83.199 89.25c-1.231 4.522-5.896 7.187-10.429 5.944 -4.528-1.241-7.203-5.918-5.97-10.442 1.23-4.526 5.905-7.19 10.434-5.947C81.761 80.045 84.433 84.723 83.199 89.25z'
                            fill='#3e4442'
                            stroke='#0e1613'
                            strokeWidth='0.5'
                            opacity='1'
                          />
                          <path
                            id='SvgjsPath3845'
                            d='M81.878 89.354c-1.202 3.473-4.827 5.499-8.357 4.531 -3.258-0.894-5.315-4.02-5.048-7.325 1.209-0.096 2.532-0.124 3.904-0.056 -0.014 0.047-0.039 0.087-0.051 0.136 -0.434 1.594 0.576 3.265 2.256 3.726 1.685 0.461 3.401-0.462 3.835-2.056 0.055-0.208 0.085-0.417 0.093-0.623C79.66 88.108 80.792 88.651 81.878 89.354z'
                            fill='#535353'
                            strokeWidth='none'
                            opacity='1'
                            stroke='none'
                          />
                          <path
                            id='SvgjsPath3846'
                            d='M76.151 84.464c-1.703-0.487-3.44 0.485-3.88 2.181 -0.44 1.687 0.584 3.454 2.286 3.942 1.705 0.489 3.443-0.484 3.884-2.173C78.884 86.719 77.855 84.953 76.151 84.464zM76.523 90.46c-0.708 0.22-1.441-0.072-1.636-0.655 -0.188-0.582 0.231-1.228 0.945-1.443 0.712-0.22 1.442 0.073 1.639 0.651C77.665 89.593 77.241 90.24 76.523 90.46z'
                            fill='#000000'
                            strokeWidth='none'
                            opacity='0.9'
                          />
                          <path
                            id='SvgjsPath3847'
                            d='M70.482 91.476c-0.523 0.314-1.307 0.034-1.754-0.633 -0.448-0.66-0.381-1.451 0.145-1.767 0.521-0.311 1.311-0.03 1.755 0.632C71.07 90.37 71.006 91.162 70.482 91.476z'
                            fill='#ffffff'
                            strokeWidth='none'
                            opacity='0.6'
                          />
                          <path
                            id='SvgjsPath3848'
                            d='M81.673 86.632c-1.198 0.718-2.999 0.072-4.02-1.445 -1.02-1.518-0.867-3.331 0.332-4.047 1.196-0.721 3-0.074 4.015 1.444C83.019 84.101 82.871 85.913 81.673 86.632z'
                            fill='#ffffff'
                            strokeWidth='none'
                            opacity='0.9'
                          />
                        </g>
                      </g>
                    </g>
                    <g id='svga-group-eyesfront-left'>
                      <path
                        id='SvgjsPath3208'
                        d='M55.5 88c0 13.807 8.06 24.999 18 24.999s18-11.192 18-24.999c0-13.808-8.06-25-18-25S55.5 74.192 55.5 88zM61.952 84.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.798 91.758 63.174 90.04 61.952 84.523z'
                        fill='#f5af95'
                        strokeWidth='none'
                        opacity='1'
                      />
                      <path
                        id='SvgjsPath3209'
                        className={styles[`eye-shadow${leftEyeClass}`]}
                        d='M72.462 92.163c3.614 0.398 13.873-1.561 14.253-2.847 0.687-2.32-4.534-6.921-12.052-7.844 -6.46-0.792-11.563 0.345-12.556 2.128 0.898-6.4 7.7-11.397 15.987-11.434 8.911-0.037 16.148 5.676 16.172 12.765 0.021 7.088-7.185 12.862-16.095 12.902 -8.913 0.037-16.149-5.676-16.173-12.764 0-0.105 0.016-0.208 0.019-0.313C63.348 90.083 68.852 91.764 72.462 92.163z'
                        fill='url(#SvgjsRadialGradient3210)'
                        opacity='1'
                      />
                      <path
                        id='SvgjsPath3214'
                        className={styles[`eye-details${leftEyeClass}`]}
                        d='M61.952 84.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.798 91.758 63.174 90.04 61.952 84.523z'
                        fill='url(#SvgjsRadialGradient3215)'
                        opacity='1'
                      />
                      <path
                        id='SvgjsPath3218'
                        className={styles[`eye-details${leftEyeClass}`]}
                        d='M62.349 79.417c4.208-1.978 9.35-2.16 13.838-1.005 2.404 0.561 4.965 1.285 7.063 2.638 1.945 1.135 3.525 2.5 5.002 4.19 -1.342-1.701-2.773-3.118-4.623-4.27 -2.276-1.416-4.769-2.294-7.364-2.916C71.678 76.928 66.542 77.184 62.349 79.417z'
                        fill='#c7633d'
                        strokeWidth='none'
                        opacity='1'
                      />
                      <path
                        id='SvgjsPath3219'
                        className={styles[`eye-front${leftEyeClass}`]}
                        d='M57.318 80.972c0 0 2.328 0.881 3.595 0.62 -0.39-0.459-1.096-1.604-1.096-1.604s1.853 0.551 3.151 0.032c0.88-0.352 4.065-1 5.456-1.066 1.687-0.082 5.073 0.125 6.735 0.424 3.374 0.608 8.985 2.63 11.678 7.184 0.255 0.572 1.407 0.921 1.407 0.921s-1.02-0.215-1.149 0.042c-0.282 0.561 1.298 2.016 1.496 2.197 -0.161-0.145-1.289-1.135-1.722-0.967 -0.061 0.022-0.137 0.388-0.155 0.482 0.3-2.426-4.838-6.746-12.052-7.604 -7.52-0.894-13.217 0.743-12.711 2.958 1.222 5.348 6.846 7.013 10.51 7.405 2.526 0.271 8.298-0.577 11.675-1.537l1.011-0.317c-1.999 1.009-7.524 2.195-9.767 2.403 -0.744 0.07-2.24 0.104-2.986 0.085 -5.949-0.158-10.16-3.179-11.729-7.26 -0.125-0.328-0.494-0.619-0.838-0.696 -1.604-0.361-5.096-1.811-5.096-1.811 2.32 0.361 3.483 0.674 5.305 0.059C58.257 82.256 57.318 80.972 57.318 80.972z'
                        fill='#000000'
                        strokeWidth='none'
                        opacity='1'
                      />
                    </g>
                  </g>
                </g>
                <g
                  id='svga-group-eyes-right-move'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g
                    id='svga-group-eyes-right'
                    className={styles[`eye-back-iris${rightEyeClass}`]}
                    transform='matrix(1,0,0,1,0,0)'
                  >
                    <g id='svga-group-eyesback-right'>
                      <path
                        id='SvgjsPath3193'
                        d='M138.048 84.523c0.506-2.285-5.191-3.973-12.711-3.051 -7.518 0.923-12.738 5.524-12.052 7.844 0.38 1.286 10.639 3.245 14.253 2.847C131.202 91.758 136.826 90.04 138.048 84.523z'
                        fill='url(#SvgjsRadialGradient3194)'
                        opacity='1'
                      />
                    </g>
                    <g
                      id='svga-group-eyesiriswrapper-right'
                      className={styles[`eye-iris${rightEyeClass}`]}
                      transform='matrix(1,0,0,1,0.75,-0.5)'
                    >
                      <g
                        id='svga-group-eyesiriscontrol-right'
                        transform='matrix(1,0,0,1,0,0)'
                      >
                        <g
                          id='svga-group-eyesiris-right'
                          transform='matrix(1,0,0,1,0,0)'
                        >
                          <path
                            id='SvgjsPath3849'
                            d='M133.199 89.25c-1.231 4.522-5.896 7.187-10.429 5.944 -4.528-1.241-7.203-5.918-5.97-10.442 1.23-4.526 5.905-7.19 10.434-5.947C131.761 80.045 134.433 84.723 133.199 89.25z'
                            fill='#3e4442'
                            stroke='#0e1613'
                            strokeWidth='0.5'
                            opacity='1'
                          />
                          <path
                            id='SvgjsPath3850'
                            d='M131.878 89.354c-1.202 3.473-4.827 5.499-8.357 4.531 -3.258-0.894-5.315-4.02-5.048-7.325 1.209-0.096 2.532-0.124 3.904-0.056 -0.014 0.047-0.039 0.087-0.051 0.136 -0.434 1.594 0.576 3.265 2.256 3.726 1.685 0.461 3.401-0.462 3.835-2.056 0.055-0.208 0.085-0.417 0.093-0.623C129.66 88.108 130.792 88.651 131.878 89.354z'
                            fill='#535353'
                            strokeWidth='none'
                            opacity='1'
                            stroke='none'
                          />
                          <path
                            id='SvgjsPath3851'
                            d='M126.151 84.464c-1.703-0.487-3.44 0.485-3.88 2.181 -0.44 1.687 0.584 3.454 2.286 3.942 1.705 0.489 3.443-0.484 3.884-2.173C128.884 86.719 127.855 84.953 126.151 84.464zM126.523 90.46c-0.708 0.22-1.441-0.072-1.636-0.655 -0.188-0.582 0.231-1.228 0.945-1.443 0.712-0.22 1.442 0.073 1.639 0.651C127.665 89.593 127.241 90.24 126.523 90.46z'
                            fill='#000000'
                            strokeWidth='none'
                            opacity='0.9'
                          />
                          <path
                            id='SvgjsPath3852'
                            d='M120.482 91.476c-0.523 0.314-1.307 0.034-1.754-0.633 -0.448-0.66-0.381-1.451 0.145-1.767 0.521-0.311 1.311-0.03 1.755 0.632C121.07 90.37 121.006 91.162 120.482 91.476z'
                            fill='#ffffff'
                            strokeWidth='none'
                            opacity='0.6'
                          />
                          <path
                            id='SvgjsPath3853'
                            d='M131.673 86.632c-1.198 0.718-2.999 0.072-4.02-1.445 -1.02-1.518-0.867-3.331 0.332-4.047 1.196-0.721 3-0.074 4.015 1.444C133.019 84.101 132.871 85.913 131.673 86.632z'
                            fill='#ffffff'
                            strokeWidth='none'
                            opacity='0.9'
                          />
                        </g>
                      </g>
                    </g>
                    <g id='svga-group-eyesfront-right'>
                      <path
                        id='SvgjsPath3228'
                        d='M126.5 63c-9.94 0-18 11.192-18 25 0 13.807 8.06 24.999 18 24.999s18-11.192 18-24.999C144.5 74.192 136.44 63 126.5 63zM127.538 92.163c-3.614 0.398-13.873-1.561-14.253-2.847 -0.687-2.32 4.534-6.921 12.052-7.844 7.52-0.922 13.217 0.767 12.711 3.051C136.826 90.04 131.202 91.758 127.538 92.163z'
                        fill='#f5af95'
                        strokeWidth='none'
                        opacity='1'
                      />
                      <path
                        id='SvgjsPath3229'
                        className={styles[`eye-shadow${rightEyeClass}`]}
                        d='M127.538 92.163c-3.614 0.398-13.873-1.561-14.253-2.847 -0.687-2.32 4.534-6.921 12.052-7.844 6.46-0.792 11.563 0.345 12.556 2.128 -0.898-6.4-7.7-11.397-15.987-11.434 -8.911-0.037-16.148 5.676-16.172 12.765 -0.021 7.088 7.185 12.862 16.095 12.902 8.913 0.037 16.149-5.676 16.173-12.764 0-0.105-0.016-0.208-0.019-0.313C136.652 90.083 131.148 91.764 127.538 92.163z'
                        fill='url(#SvgjsRadialGradient3230)'
                        opacity='1'
                      />
                      <path
                        id='SvgjsPath3234'
                        className={styles[`eye-details${rightEyeClass}`]}
                        d='M138.048 84.523c0.506-2.285-5.191-3.973-12.711-3.051 -7.518 0.923-12.738 5.524-12.052 7.844 0.38 1.286 10.639 3.245 14.253 2.847C131.202 91.758 136.826 90.04 138.048 84.523z'
                        fill='url(#SvgjsRadialGradient3235)'
                        opacity='1'
                      />
                      <path
                        id='SvgjsPath3238'
                        className={styles[`eye-details${rightEyeClass}`]}
                        d='M137.651 79.417c-4.208-1.978-9.35-2.16-13.838-1.005 -2.404 0.561-4.965 1.285-7.063 2.638 -1.945 1.135-3.525 2.5-5.002 4.19 1.342-1.701 2.773-3.118 4.623-4.27 2.276-1.416 4.769-2.294 7.364-2.916C128.322 76.928 133.458 77.184 137.651 79.417z'
                        fill='#c7633d'
                        strokeWidth='none'
                        opacity='1'
                      />
                      <path
                        id='SvgjsPath3239'
                        className={styles[`eye-front${rightEyeClass}`]}
                        d='M142.682 80.972c0 0-2.328 0.881-3.595 0.62 0.39-0.459 1.096-1.604 1.096-1.604s-1.853 0.551-3.151 0.032c-0.88-0.352-4.065-1-5.456-1.066 -1.687-0.082-5.073 0.125-6.735 0.424 -3.374 0.608-8.985 2.63-11.678 7.184 -0.255 0.572-1.407 0.921-1.407 0.921s1.02-0.215 1.149 0.042c0.282 0.561-1.298 2.016-1.496 2.197 0.161-0.145 1.289-1.135 1.722-0.967 0.061 0.022 0.137 0.388 0.155 0.482 -0.3-2.426 4.838-6.746 12.052-7.604 7.52-0.894 13.217 0.743 12.711 2.958 -1.222 5.348-6.846 7.013-10.51 7.405 -2.526 0.271-8.298-0.577-11.675-1.537l-1.011-0.317c1.999 1.009 7.524 2.195 9.767 2.403 0.744 0.07 2.24 0.104 2.986 0.085 5.949-0.158 10.16-3.179 11.729-7.26 0.125-0.328 0.494-0.619 0.838-0.696 1.604-0.361 5.096-1.811 5.096-1.811 -2.32 0.361-3.483 0.674-5.305 0.059C141.743 82.256 142.682 80.972 142.682 80.972z'
                        fill='#000000'
                        strokeWidth='none'
                        opacity='1'
                      />
                    </g>
                  </g>
                </g>
                <g id='svga-group-facehighlight-single'>
                  <path
                    id='SvgjsPath2772'
                    d='M140.204 113.007c0.035 22.275-17.995 40.365-40.273 40.396 -22.274 0.036-40.361-17.993-40.396-40.272C59.501 90.857 77.53 72.77 99.808 72.735 122.083 72.701 140.171 90.73 140.204 113.007z'
                    fill='url(#SvgjsRadialGradient2773)'
                    opacity='1'
                  />
                  <path
                    id='SvgjsPath2776'
                    d='M135,55.999c0,19.329-15.671,35-35,35c-19.329,0-35-15.671-35-35s15.671-35,35-35C119.329,20.999,135,36.67,135,55.999z'
                    fill='url(#SvgjsRadialGradient2777)'
                    opacity='1'
                  />
                </g>
                <g
                  id='svga-group-eyebrows-left-move'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g
                    id='svga-group-eyebrows-left-rotate'
                    transform='matrix(1,0,0,1,0,0)'
                  >
                    <g
                      id='svga-group-eyebrows-left'
                      className={
                        liftLeftEyebrow ? styles['lift-left-eyebrow'] : ''
                      }
                      transform='matrix(1,0,0,1,0,0)'
                    >
                      <path
                        id='SvgjsPath3698'
                        d='M74.799 69.068c-4.425-0.475-21.252 3.714-21.252 3.714s16.789-6.74 23.757-5.667c5.188 0.798 14.397 5.077 12.706 7.339C88.649 76.275 84.408 70.1 74.799 69.068z'
                        fill='#b7513b'
                        strokeWidth='none'
                        opacity='1'
                        stroke='none'
                      />
                    </g>
                  </g>
                </g>
                <g
                  id='svga-group-eyebrows-right-move'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g
                    id='svga-group-eyebrows-right-rotate'
                    transform='matrix(1,0,0,1,0,0)'
                  >
                    <g
                      id='svga-group-eyebrows-right'
                      className={
                        liftRightEyebrow ? styles['lift-right-eyebrow'] : ''
                      }
                      transform='matrix(1,0,0,1,0,0)'
                    >
                      <path
                        id='SvgjsPath3699'
                        d='M109.731 74.187c-1.713-2.292 7.592-6.31 13.546-6.804 7.117-0.59 22.914 4.085 22.914 4.085s-15.9-2.628-20.377-2.106C115.998 70.506 111.11 76.031 109.731 74.187z'
                        fill='#b7513b'
                        strokeWidth='none'
                        opacity='1'
                        stroke='none'
                      />
                    </g>
                  </g>
                </g>
                <g
                  id='svga-group-nose-single-move'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g
                    id='svga-group-nose-single'
                    transform='matrix(1,0,0,1,0,0)'
                  >
                    <path
                      id='SvgjsPath3645'
                      d='M105.496 114.749c0.889 6.039-4.018 3.352-5.652 3.615 -1.306 0.213-6.255 1.983-5.962-3.694 0.138-2.701 2.768-5.247 5.854-5.247C102.626 109.423 104.913 110.802 105.496 114.749z'
                      fill='#ffdbce'
                      strokeWidth='none'
                      opacity='0.2'
                    />
                    <path
                      id='SvgjsPath3646'
                      d='M103.762 116.205c0.029 0.096-1.657 2.01-1.74 1.93 -0.439 0.316-1.191 0.45-2.019 0.458 -0.558 0.005-1.057-0.47-1.46-0.427 -0.015-0.063-3.645-1.408-3.868-1.931 -0.334 0.075-0.576 0.236-0.672 0.476 -0.248 0.624 0.567 1.547 1.82 2.063 0.619 0.254 1.561 0.434 2.049 0.402 0.331 0.478 0.906 0.743 1.984 0.734 1.189-0.012 2.336-0.283 2.549-0.843 0.292 0.178 1.4-0.069 1.814-0.27 0.457-0.222 1.215-0.857 1.233-1.633C105.467 116.506 104.473 116.081 103.762 116.205z'
                      fill='#e69375'
                      strokeWidth='none'
                      opacity='1'
                    />
                    <path
                      id='SvgjsPath3647'
                      d='M98.529 118.552c-0.074 0.18-0.236 0.309-0.449 0.392 -0.286-0.466-0.875-0.945-1.635-1.278 -0.884-0.384-1.748-0.458-2.27-0.25 -0.182-0.296-0.243-0.583-0.142-0.821 0.26-0.62 1.477-0.68 2.72-0.141C97.995 116.995 98.79 117.936 98.529 118.552zM104.806 117.053c0.154-0.042 0.28 0.012 0.401 0.036 0.072-0.595-0.415-1.023-1.237-1.004 -0.965 0.024-2.019 0.658-2.351 1.417 -0.28 0.645 0.053 1.166 0.751 1.296C102.381 118.693 102.845 117.594 104.806 117.053z'
                      fill='#c7633d'
                      strokeWidth='none'
                      opacity='1'
                    />
                  </g>
                </g>
                <g id='svga-group-hair-front' transform='matrix(1,0,0,1,0,0)'>
                  <path
                    id='SvgjsPath3831'
                    d='M163.476 45.849C157.957 11.071 51.814-21.979 45.016 30.572c-0.885 18.136-10.912 73.919-11.9 84.041 6.018-18.799 20.431-5.47 38.764-49.857 4.9-11.864 11.813-39.917 31.311-41.801 9.464-0.893 16.743 3.867 19.483 12.72 8.666-4.414 8.823 13.935 10.045 23.533 1.612 12.513 0.039 18.399 7.431 27.51 0.063 0.161 1.351 1.595 1.363 1.609 11.489 12.621 22.998 12.145 25.989 24.744C168.675 118.003 161.736 45.363 163.476 45.849z'
                    fill='#b84131'
                    strokeWidth='none'
                    opacity='0.1'
                  />
                  <path
                    id='SvgjsPath3832'
                    d='M10.679 67.989c-0.08 0.52-0.14 1.05-0.18 1.58 -3.683 6.71-0.19 17.072 7.2 19.07 3.015 2.597 6.918 4.146 10.19 4.51C12.352 96.056 3.486 80.156 10.679 67.989zM140.989 150.802c1.873 11.332-8.278 12.377-17.511 19.258l-0.136-0.146c3.56-4.151 8.838-4.812 12.242-8.592 5.51-6.138-0.258-14.435 1.428-20.549 2.926-10.847 21.597-10.767 21.597-24.554 -0.088-11.4-10.183-10.74-13.68-25.996 3.991 4.223 8.235 7.215 14.113 9.352 2.064 2.779 5.38 10.297 2.086 14.754l-0.133-0.071c1.018-3.279 0.099-7.181-1.637-9.489 -1.885-2.487-3.539-2.963-5.204-3.87 6.479 8.318 6.148 15.227 6.144 15.296 0 18.127-24.507 11.586-19.896 31.825 0.395 1.726 0.462 2.093 0.595 2.789L140.989 150.802zM28.074 93.072c-0.721 0.188-1.471 0.338-2.282 0.473 -19.331 17.736 8.183 44.458 20.79 26.081l-0.148-0.132c-1.512 1.33-3.145 2.004-4.854 2.004h-0.001c-4.978-0.002-9.098-5.829-7.713-10.782 2.755-9.938 16.66-13.418 22.715-21.969 3.322-4.667 7.244-13.057 9.402-18.934l-0.181-0.083C56.737 86.019 42.105 94.836 28.074 93.072zM54.746 91.833c-2.594 6.695-17.633 13.882-13.478 23.168l0.189-0.06c-0.4-2.134 0.236-4.373 1.944-6.846 5.659-8.237 14.417-8.034 16.256-22.935l-0.188-0.059C58.019 87.842 57.463 88.981 54.746 91.833zM169.426 107.563c1.005 1.093 2.341 3.133 3.048 5.467l0.195-0.025c0.314-7.889-6.813-11.093-13.422-13.359 0.99 1.468 13.351 10.311 5.77 21.729 -6.407 9.553-20.878 9.986-24.507 22.293 0.191 2.607 1.072 5.197 1.342 8.249 1.865 3.505 1.438 5.546 0.955 6.777l0.176 0.092c2.649-3.987 0.84-6.468-0.039-8.81 -4.883-13.385 11.86-17.55 21.416-26.186C171.809 116.342 171.383 110.944 169.426 107.563zM173.211 87.674c4.254-0.131 8.963-2.941 9.957-8.197l-0.181-0.076c-3.981 5.667-9.384 4.417-10.994 3.249 4.146-3.207 6.866-7.883 7.496-13.841 0.855-8.086-2.466-16.957-6.196-21.562 0.679-4.414-0.745-5.51-3.217-7.753l-0.149 0.131c2.775 4.03-1.925 10.404-7.444 2.045 1.132 1.552 2.68 3.229 4.529 3.746 -5.866-36.958-29.602-49.74-43.027-44.981C79.132-29.613 36.629 3.565 29.402 59.413c-8.654-6.647-17.233-1.502-18.283 9.256 -2.856 27.867 36.579 37.724 57.34-6.717 5.763-12.363 13.758-38.861 34.479-40.863 0.731-0.07 1.461-0.106 2.166-0.106 8.938 0 15.002 5.705 17.664 14.319 9.215-4.692 12.382 13.048 13.681 23.25 1.714 13.297 0.041 19.554 7.897 29.234 0.067 0.171 1.436 1.697 1.448 1.711 12.213 13.413 23 8.257 26.729 19.893 1.64 5.134-1.395 9.365-4.83 13.418 1.683-0.594 5.142-0.965 8.508-2.992C187.004 113.299 188.721 98.575 173.211 87.674z'
                    fill='#b84131'
                    strokeWidth='none'
                    opacity='1'
                  />
                  <path
                    id='SvgjsPath3833'
                    d='M80.007 36.444c3.484-8.505 13.429-16.407 28.114-15.8 7.039 0.291 15.361 8.612 14.549 15.101C113.548 27.292 93.276 27.292 80.007 36.444z'
                    fill='#991b0a'
                    strokeWidth='none'
                    opacity='1'
                  />
                  <path
                    id='SvgjsPath3834'
                    d='M170.429 39.816c2.258 2.056 3.086 2.956 2.981 5.889 -1.468 6.625-9.488 4.38-13.608 0.529C167.771 50.245 173.41 45.705 170.429 39.816zM183.168 79.478l-0.05-0.021c-0.736 1.761-1.699 3.408-3.118 4.827 -7 5-16 2-22-3 4.172 4.768 9.765 6.677 15.508 6.609 -0.101-0.072-0.195-0.147-0.297-0.219C177.465 87.543 182.174 84.733 183.168 79.478zM21 106.283c0.924-5.081 3.351-9.303 6.474-13.071 0 0-0.799 0.187-1.682 0.333 -13.494 12.38-4.18 29.248 7.159 31.901C25.569 121.724 20.294 114.754 21 106.283zM65.802 69.73c-1.389 5.293-6.815 15.637-9.221 19.017 -6.055 8.55-19.96 12.031-22.715 21.969 -1.832 6.554 5.961 14.591 12.568 8.778l0.148 0.132c-0.396 0.577-0.815 1.104-1.248 1.604 -11.551 8.911-20.499-8.806-11.334-17.946C43.878 93.434 57.354 93.212 65.802 69.73zM27.801 93.135c-13.83 3.412-24.862-12.053-17.122-25.146 -0.08 0.52-0.14 1.05-0.18 1.58 -3.683 6.71-0.19 17.072 7.2 19.07C20.688 91.213 24.547 92.754 27.801 93.135zM169.188 122.389c-1.076 0.251-1.021 0.252-1.494 0.419 3.436-4.053 6.47-8.284 4.83-13.418 -3.797-11.849-14.94-6.297-27.454-20.715 -0.021-0.132-0.021-0.132 0 0 -8.636-9.933-6.913-16.879-8.62-30.123 -1.299-10.201-4.466-27.941-13.681-23.25 -3.2-10.356-10.696-15.091-19.83-14.213 -20.72 2.001-28.716 28.5-34.479 40.863C50.633 100.11 19.085 98.196 12.309 79.394c2.157 2.185 8.936 7.523 11.927 8.292C40.55 91.879 52 82.284 59 67.284c10-22 21-60 51-52 6 2 13 8 14 16 1-4 5.137-1.504 6-1 7.536 4.402 8 31 12 47 2 8 8 13 14 16 9 4 25 10 19 22 6.769-4.062 8.493-11.33 7.043-18.394C187.865 106.951 183.654 119.025 169.188 122.389zM161.129 114.329l-0.133-0.071c1.017-3.275 0.104-7.174-1.637-9.489 -1.885-2.487-3.539-2.963-5.204-3.87 4.465 5.581 6.358 12.247 6.144 15.296 0 8.941-6.206 12.02-11.986 15.351 4.062-3.166 8.695-5.614 10.688-10.262 1.146-3.44 1.423-9.372-2.048-13.682 -11.664-14.484-11.253-14.337-11.94-17.292 3.938 3.995 7.768 6.989 14.031 9.265C161.107 102.354 164.423 109.872 161.129 114.329zM172.669 113.004l-0.195 0.025c-0.707-2.334-2.043-4.374-3.048-5.467 1.957 3.382 2.383 8.779-5.066 16.228 -9.556 8.636-26.299 12.801-21.416 26.186 0.879 2.342 2.688 4.822 0.039 8.81l-0.176-0.092c0.483-1.231 0.91-3.272-0.955-6.777 -0.27-3.052-1.15-5.642-1.342-8.249 3.629-12.307 18.1-12.74 24.507-22.293 7.571-11.404-4.733-20.192-5.77-21.729C165.855 101.911 172.983 105.115 172.669 113.004zM138.919 11.468c1.651-0.094 6.902 0.992 11.702 5.47 0.264 0.246 1.177 0.876 1.267 1.242 -0.053-0.213-0.432-0.529-0.565-0.695 -8.649-10.731-20.844-10.137-26.215 1.18C128.837 12.739 132.46 11.238 138.919 11.468zM125.292 12.5c3.131-6.863 6.52-8.033 11.678-9.144 -2.425 0.7-4.488 1.909-6.559 3.308C128.204 8.155 126.642 10.248 125.292 12.5zM98.428-3.456c6.193 0.112 9.726 0.061 15.894 2.858 3.988 1.808 8.072 6.634 9.125 10.58 0.092 0.343 0.146 0.956 0.357 1.247 -0.157-0.216-0.236-0.559-0.338-0.802 -0.903-2.179-2.23-4.043-3.886-5.615 -3.045-2.892-9.305-6.081-13.272-7.017C103.713-2.817 101.07-3.128 98.428-3.456zM85.466 8.464c8.818-2.963 18.533-4.691 27.102-0.052 7.246 3.922 12.452 15.885 12.019 21.152 0.035-0.425-0.144-0.972-0.211-1.389 -0.442-2.74-1.213-5.677-3.733-9.784C112.622 5.322 100.155 4.512 85.466 8.464zM125.088 25.336c4.646-5.594 9.915-8.012 15.557-3.422 3.039 2.473 5.411 7.471 7.541 12.139 0.311 0.68 1.049 1.718 1.128 2.47 -0.023-0.226-3.622-5.88-3.745-6.071C137.46 18.09 132.274 18.675 125.088 25.336zM128.878 28.23c2.147-0.928 5.885-2.564 10.627 3.72 8.927 11.829 8.434 30.24 9.228 31.829 0 0-2.488-11.189-5.874-20.503C140.502 36.333 136.774 24.89 128.878 28.23zM129.505 0.941c-5.084 7.857-4.512 12.572-4.862 14.069C124.643 10.098 124.247 7.338 129.505 0.941zM51.946 19.75C56.418 12.484 62.261 5.563 69.609 1.06c8.727-4.957 20.542-5.78 22.963-5.192 -0.413-0.1-1.087 0.085-1.501 0.125C79.942-2.928 67.39 4.184 60.268 10.735 57.229 13.53 54.565 16.566 51.946 19.75zM84.603 10.169c-10.324 3.203-16.542 11.63-21.404 21.625C54.049 50.6 52.301 58.256 50.5 65.223 50.759 64.223 56.146 16.17 84.603 10.169zM22.081 63.668c-3.561 8.263 7.553 11.926 16.005 5.157 1.625-1.303 3.44-3.105 4.366-5.016C34.34 80.548 16.562 73.076 22.081 63.668zM19.685 76.354c3.221 6.726 11.029 8.173 17.526 5.532C47.338 77.77 48.468 69.088 49.138 67.6c-0.467 1.039-0.135 3.909-2.753 8.552C39.323 88.671 23.116 86.441 19.685 76.354zM151.572 46.991c5.011 7.583 12.652 33.006 27.642 15.851 -1.259 1.44-7.862 12.561-17.513 4.278 -2.713-2.719-4.492-6.374-6.011-9.85C154.922 55.511 151.572 46.991 151.572 46.991z'
                    fill='#a92d1c'
                    strokeWidth='none'
                    opacity='1'
                  />
                  <path
                    id='SvgjsPath3835'
                    d='M11.021 72.976c-0.083-1.398-0.053-2.837 0.098-4.307 0.713-7.312 4.967-12.225 10.584-12.225 2.024 0 4.145 0.678 6.218 1.957C18.393 55.373 12.423 63.637 11.021 72.976zM26.458 88.002c0.412 0.124 0.996 0.163 1.375 0.362 -1.165-0.611-2.362-1.095-3.475-1.823 -8.705-5.689-9.406-16.603-5.602-22.126 2-2.904 4.856-4.222 8.06-5.354C10.56 60.979 8.307 82.551 26.458 88.002zM68.477 36.558c8.522-15.251 18.99-26.346 36.584-25.088 8.769 0.627 12.573 5.472 13.573 6.249 -0.695-0.54-1.208-1.363-1.875-1.952C106 6.247 83.032 6.989 67.955 31.316 53.86 54.056 59.573 79.009 36.972 88.124 58.752 80.897 55.694 59.44 68.477 36.558zM140.555 15.934c4.046 2.542 6.225 7.406 8.431 11.449 3.468 6.355 11.339 20.026 18.525 19.247 -0.817 0.088-2.025-0.526-2.74-0.868 -6.921-3.315-10.014-14.387-13.951-20.79 -7.076-11.503-13.41-15.536-23.121-6.073C131.361 16.098 136.013 13.079 140.555 15.934zM150.674 55.099c0.313 0 1.294 3.863 1.411 4.243 3.23 10.488 5.633 20.354 13.769 24.604 3.326 1.738 7.543 1.937 11.065 0.615 -1.68 0.63-6.101 0.697-9.473-1.113C159.407 79 154.645 62.505 150.674 55.099 150.673 55.099 151.021 55.748 150.674 55.099zM162.796 64.039c8.201 8.268 16.567-2.15 16.567-2.15 -0.07-0.044-1.289 0.962-1.435 1.061 -5.791 3.958-11.011 5.188-19.353-9.521 -1.483-2.614-2.706-5.6-4.612-7.941C156.498 50.831 158.454 59.661 162.796 64.039zM160.279 89.302c9.286 3.633 14.87 4.469 17.569 14.461 0.243 0.9 0.716 2.036 0.731 2.972 -0.015-0.868-0.262-1.837-0.415-2.689 -2.922-16.191-16.892-13.159-24.917-22.424 -7.583-8.756-6.702-24.363-14.525-44.845C147.298 66.178 140.782 81.67 160.279 89.302zM72.029-3.178c1.241-1.198 3.136-1.921 4.725-2.482 7.571-2.674 15.332-1.807 21.078-1.52 13.311 0.664 19.81 4.694 25.242 10.029C109.762-14.638 80.875-11.717 72.029-3.178zM44.67 22.597c-1.168 2.621-2.494 5.509-3.051 8.347 0.083-0.421 0.374-0.872 0.547-1.259 2.896-6.466 5.574-10.3 9.528-15.151 3.799-5.568 9.38-11.069 15.787-13.439C59.604 3.042 50.129 10.354 44.67 22.597zM39.039 55.777c-0.198 1.042-0.562 2.207-0.573 3.274 0.009-0.869 0.568-1.976 0.821-2.793 2.163-7.005 3.842-10.827 6.375-17.01 2.431-5.937 3.638-11.355 10.621-20.705C45.945 29.388 41.813 41.125 39.039 55.777zM55.375 27.942c-2.789 4.838-6.141 16.149-6.712 20.02 0.157-1.067 2.891-7.599 3.657-9.29 1.558-3.547 3.591-6.816 5.289-10.283 6.162-12.574 12.357-15.401 14.494-16.916C65.062 14.781 60.126 19.601 55.375 27.942zM32.739 77.635c3.527 0.049 6.748-1.36 9.404-3.594 4.966-4.177 5.505-15.654 5.311-16.667 0.115 0.6-0.32 1.634-0.458 2.207 -2.021 8.361-5.425 11.157-6.411 12.335 -5.188 6.198-12.555 4.282-16.445 4.018C26.818 76.805 29.872 77.932 32.739 77.635zM135.581 7.312c2.286-0.523 5.451-1.355 8.763 0.376 0.767 0.4 1.354 0.956 2.052 1.447 -0.68-0.478-1.141-1.345-1.83-1.865 -4.273-3.233-12.625-4.116-18.211 7.018C128.618 11.019 131.579 8.227 135.581 7.312zM141.364 31.847c5.162 8.297 6.934 15.202 6.99 16.202 -0.257-4.489-2.794-13.511-5.681-17.594 -4.828-6.831-10.648-9.3-16.343-2.971C132.43 21.999 136.994 24.823 141.364 31.847zM115.443 7.317c4.175 3.956 6.33 6.555 8.45 11.981 0.154 0.395 0.785 1.475 0.709 1.904 0.18-1-2.36-12.5-8.289-16.704 -5.316-3.771-11.695-5.085-18.12-4.544C104.688 0.582 110.647 2.773 115.443 7.317zM26.531 114.318c0.908 3.285 3.005 5.68 5.192 8.166 -2.104-2.392-3.806-5.666-4.187-8.842 -1.254-10.454 14.183-19.624 18.236-22.463C35.697 96.374 23.477 103.265 26.531 114.318zM159 121.284c0.902-2.707 1.123-5.713 0.253-8.457 -1.509-4.762-10.313-12.876-13.038-18.543 2.083 9.288 12.847 11.595 12.382 22.561 -0.573 13.472-20.439 13.494-21.831 25.208 -0.852 7.131 5.628 15.771-4.449 21.886 -2.313 1.404-4.846 2.436-6.994 4.104 -1.688 1.312-2.598 2.547-1.235 1.572 6.083-4.354 11.355-5.69 14.86-9.83 5.911-6.979-2.328-15.025 2.204-22.31C144.34 132.352 155.849 128.633 159 121.284 160.102 117.979 157.008 125.932 159 121.284z'
                    fill='#c75849'
                    strokeWidth='none'
                    opacity='1'
                  />
                  <path
                    id='SvgjsPath3836'
                    d='M173.609 87.849c5.387-0.243 8.898-3.05 9.87-9.46 -3.175 4.882-8.078 5.779-11.181 4.17 11.266-8.857 8.878-24.411 1.141-35.03 0.742-3.228 0.077-6.223-4.45-8.89 2.911 2.471 1.497 7.196-1.66 6.74 -4.094-36.541-26.934-49.917-43.39-45.29 -13.518-9.722-28.565-14.841-45.87-10.29 -34.667 9.075-43.87 39.112-48.83 69.36 -2.077-1.411-4.948-3.106-7.42-3.13 -6.215-0.062-10.224 5.815-11.05 11.39 -8.445 12.359 0.59 28.023 14.71 26.25 -16.989 15.276 1.356 38.655 15.81 30.931 2.886-1.545 5.02-4.014 6-6.07 -4.84 6.229-13.562 0.649-13.23-5.819 0.458-8.869 13.948-13.878 20.28-20.321 -2.623 5.241-18.354 13.693-12.89 23.1 0.005 0 0.197 0.315 0.2 0.32 -2.039-12.234 16.625-11.175 18.2-31.201 11.19-20.805 16.276-50.683 34.67-60.46 10.764-5.729 23.353-3.221 28.26 11.44 12.934-7.735 13.381 35.532 13.93 38.91 0.96 6.084 4.058 11.426 8.271 15.91 2.857 13.654 9.712 13.542 12.34 21.32 0.77 2.29 0.88 4.98 0.319 7.32 -2.92 12.169-24.624 10.664-21.47 27.59 0.858 4.641 3.469 11.16-2.5 15.92 -3.733 2.997-8.958 4.384-11.45 8.729 9.444-7.482 20.484-8.248 19.74-19.079 1.473 3.192 1.471 5.439-0.27 8.369 0.026-0.029 0.779-0.87 0.779-0.909 6.333-7.552-4.379-11.542 2.33-20.29 5.887-7.674 30.81-16.702 25.37-30.301 0.769 1.268 1.858 3.806 2.29 5.04 -0.467 3.046-2.945 6.55-4.96 8.811 2.138-0.488 5.975-1.001 9.36-3.101C188.461 112.611 188.531 97.843 173.609 87.849zM17.099 88.099c-5.549-2.098-9.671-11.194-6.64-18.01C10.096 76.51 12.36 83.723 17.099 88.099zM10.679 67.989c-0.08 0.52-0.14 1.05-0.18 1.58 -3.683 6.71-0.19 17.072 7.2 19.07 3.015 2.597 6.918 4.146 10.19 4.51C12.352 96.056 3.486 80.156 10.679 67.989zM43.319 108.039c-1.445 2.091-2.427 4.432-1.96 6.921 -4.132-9.234 10.863-16.337 13.48-23.091 2.703-2.825 3.257-3.958 4.72-6.72C57.729 99.98 48.978 99.804 43.319 108.039zM56.499 88.689c-6.028 8.513-19.968 12.038-22.73 22 -1.855 6.634 6.043 14.762 12.73 8.88 -12.518 18.248-39.865-8.311-20.64-25.95 0.76-0.11 1.51-0.26 2.24-0.45 9.674 1.281 22.187-2.964 31.63-14.32 0.01 0 0.02-0.01 0.02-0.02 2.33-2.8 4.37-5.87 6.14-9.05C63.784 75.512 59.826 84.015 56.499 88.689zM123.419 169.979c3.541-4.132 8.822-4.794 12.24-8.59 5.546-6.178-0.225-14.516 1.45-20.59 2.91-10.792 21.6-10.715 21.6-24.58 -0.088-11.373-10.232-11.034-13.6-25.661 4.459 4.709 9.038 7.344 13.899 9.11 1.941 2.641 5.329 10.15 2.04 14.601 1.165-3.166 0.117-7.266-1.609-9.561 -2.066-2.728-3.826-3.043-5.681-4.15 6.864 8.566 6.44 15.63 6.44 15.63 0 17.419-23.907 12.546-20.25 30.23 0.196 1 0.624 2.692 0.89 4.09 -0.01-0.01-0.029-0.021-0.05-0.03 0.021 0.01 0.03 0.021 0.05 0.04C142.928 162.06 132.769 163.011 123.419 169.979zM161.739 124.229c-6.924 6.401-17.294 8.011-21.15 18.88 -0.306-10.538 13.433-10.289 18.5-19.979 1.69-3.222 1.953-7.32 1.601-8.061 0-2.538-1.591-7.867-6.271-13.88 7.516 4.415 7.361 11.318 6.431 13.481 2.209-1.546 3.365-7.719-0.98-14.281C168.039 107.914 169.85 116.119 161.739 124.229zM168.899 106.919c2.592 3.737 2.784 9.406-4.61 16.801 -9.573 8.647-26.357 12.809-21.439 26.29 0.885 2.365 2.672 4.772 0.05 8.72 0.597-1.519 0.777-3.598-0.96-6.86 -0.248-2.982-1.139-5.604-1.33-8.21 3.622-12.24 18.049-12.624 24.49-22.229 7.605-11.455-4.923-20.591-5.601-21.591 2.891 1.01 13.438 3.935 13.07 13.161C171.748 110.289 169.995 107.801 168.899 106.919zM176.149 119.729c-3.326 2.004-7.141 2.506-8.141 2.86 3.398-4.015 6.219-8.195 4.61-13.23 -3.758-11.723-14.523-6.502-26.75-19.93 -0.112-0.122-1.376-1.544-1.43-1.68 -7.846-9.677-6.185-15.976-7.891-29.21 -1.295-10.17-4.581-28.055-13.72-23.38 -2.851-9.242-9.671-15.153-19.9-14.17 -20.827 2.012-28.627 28.2-34.56 40.92 0 0.01 0 0.02-0.01 0.03 -20.624 44.127-59.998 34.618-57.14 6.74 1.021-10.465 9.459-15.968 18.26-9.08 7.36-57.481 50.768-88.344 94.45-59.08 14.854-4.919 37.499 9.926 42.96 44.76 -2.972-0.829-6.056-5.883-6.72-8.19 0.49 1.76 1.42 3.45 2.44 4.95 5.747 8.061 10.12 1.48 7.399-2.47 2.901 2.632 3.636 3.35 3.19 7.63 0.01 0.03 0.01 0.05-0.01 0.08 5.651 6.941 11.34 25.178-1.101 35.17h-0.01c-0.08 0.07-0.17 0.14-0.25 0.2 1.095 0.924 6.884 3.011 11.24-3.19 -0.965 5.104-5.571 8.12-10.17 8.12C188.649 98.474 186.91 113.239 176.149 119.729z'
                    fill='#8a1000'
                    strokeWidth='none'
                    opacity='1'
                  />
                </g>
                <g
                  id='svga-group-glasses-single-move'
                  transform='matrix(1,0,0,1,0,0)'
                >
                  <g
                    id='svga-group-glasses-single'
                    transform='matrix(1,0,0,1,0,0)'
                  >
                    <path
                      id='SvgjsPath3842'
                      d='M100,18.13L100,18.13L100,18.13L100,18.13z'
                      fill='#26120b'
                      strokeWidth='none'
                      opacity='1'
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <rect
            id='SvgjsRect1052'
            width='200'
            height='15'
            x='0'
            y='185'
            fill='#ecf0f1'
            opacity='0.5'
            style={{ display: 'none' }}
          />
          <text
            id='SvgjsText1053'
            fill='#333333'
            x='38.76297378540039'
            y='182.42838287353516'
            style={{ display: 'none' }}
          >
            <tspan id='SvgjsTspan1054' dy='13' x='38.76297378540039'>
              Created on svgAvatars.com
            </tspan>
          </text>
        </g>
      </svg>
    )
  }
)
