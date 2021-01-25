#import "HomeIndicatorDetect.h"

@implementation HomeIndicatorDetect

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup { return YES; }

- (NSDictionary *)constantsToExport
{

    if (@available(iOS 11.0, *)) {
        UIWindow *window = UIApplication.sharedApplication.windows.firstObject;
        CGFloat topPadding = window.safeAreaInsets.top;
        CGFloat bottomPadding = window.safeAreaInsets.bottom;

        if ((bottomPadding > 0.0)) {
            NSLog(@"Has indicator");
            return @{
                    @"DETECT": @true
            };
        }
    }

    NSLog(@"Does not have indicator");
    return @{ @"DETECT": @false };
}

@end
