'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
    return (
        <div className="container mx-auto py-6">
            <Card>
                <CardHeader>
                    <CardTitle>Settings</CardTitle>
                    <CardDescription>
                        Manage your account settings and preferences.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                            </div>
                            <Button variant="outline">Enable</Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium">Connected Devices</h3>
                                <p className="text-sm text-muted-foreground">Manage devices connected to your account</p>
                            </div>
                            <Button variant="outline">View Devices</Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium">Email Notifications</h3>
                                <p className="text-sm text-muted-foreground">Configure your email notification preferences</p>
                            </div>
                            <Button variant="outline">Configure</Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-medium">Push Notifications</h3>
                                <p className="text-sm text-muted-foreground">Configure your push notification preferences</p>
                            </div>
                            <Button variant="outline">Configure</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 