package org.hisp.dhis.about.action;

/*
 * Copyright (c) 2004-2017, University of Oslo
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * Neither the name of the HISP project nor the names of its contributors may
 * be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import com.opensymphony.xwork2.Action;

import org.apache.struts2.ServletActionContext;
import org.hisp.dhis.appmanager.App;
import org.hisp.dhis.appmanager.AppManager;
import org.hisp.dhis.setting.SettingKey;
import org.hisp.dhis.setting.SystemSettingManager;
import org.hisp.dhis.webapi.utils.ContextUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.hisp.dhis.user.UserSettingKey;
import org.hisp.dhis.user.UserSettingService;
import java.lang.NullPointerException;

import java.util.List;

/**
 * @author Lars Helge Overland
 */
public class RedirectAction
    implements Action
{
    @Autowired
    private SystemSettingManager systemSettingManager;

    @Autowired
    private AppManager appManager;

    private UserSettingService userSettingService;

    public void setUserSettingService( UserSettingService userSettingService )
    {
        this.userSettingService = userSettingService;
    }

    private String redirectUrl;

    public String getRedirectUrl()
    {
        return redirectUrl;
    }

    @Override
    public String execute()
        throws Exception
    {
        String startModule = (String) systemSettingManager.getSystemSetting( SettingKey.START_MODULE );
        try {
            String userStartModule = (String) userSettingService.getUserSetting( UserSettingKey.START_MODULE );
            if(userStartModule!=null && ! userStartModule.trim().isEmpty() ) {
                startModule = (String) userStartModule;

            }
        } catch(NullPointerException e) {
            System.out.println(e.getMessage());
        }


        String contextPath = (String) ContextUtils.getContextPath( ServletActionContext.getRequest() );

        System.out.println(startModule);

        if ( startModule != null && !startModule.trim().isEmpty() )
        {
            if ( startModule.startsWith( "/" ) )
            {

                redirectUrl = "../" + startModule.substring( "/".length() ) + "/index.action";
                return SUCCESS;

            }
            else
            {

                List<App> apps = appManager.getApps( contextPath );

                for ( App app : apps )
                {
                    if ( app.getName().equals( startModule ) )
                    {
                        redirectUrl = app.getLaunchUrl();
                        return SUCCESS;
                    }

                }
            }
        }

        redirectUrl = "../dhis-web-dashboard-integration/index.action";

        return SUCCESS;
    }
}
