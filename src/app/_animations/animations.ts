import {
    trigger,
    animate,
    transition,
    style,
    query,
  } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition( '* => *', [

      query(':enter',
          [
              style({ position: 'absolute',
                      opacity: 0,
                      width: '100%' })
          ],
          { optional: true }
      ),

      query(':leave',
          [
              style({ position: 'absolute',
                      opacity: 1,
                      width: '100%' }),
              animate('0.3s', style({ opacity: 0 }))
          ],
          { optional: true }
      ),

      query(':enter',
          [
              style({ position: 'absolute',
                      opacity: 0,
                      width: '100%' }),
              animate('0.3s', style({ opacity: 1 }))
          ],
          { optional: true }
      )

  ])

  ]);
