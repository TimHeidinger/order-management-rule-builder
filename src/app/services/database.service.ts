import { RuleMetaData } from './../models/RuleMetaData';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
}

@Injectable({
    providedIn: 'root'
})
export class DatabaseBridge {

    constructor(private http: HttpClient) { }

    backendUrl: string = 'http://aoe-rule-builder-backend.hosting125164.a2fe5.netcup.net/api';

    /**
     * Insert new rule to database
     * @param ruleMetaData rule that should be inserted
     */
    public insert(ruleMetaData: RuleMetaData): Observable<String> {
        return this.http.post<String>(this.backendUrl + "/rule-add.php" +
            "?rule_name=" + ruleMetaData.rule_name
            + "&rule_initial_creation=" + ruleMetaData.rule_initial_creation
            + "&rule_last_updated=" + ruleMetaData.rule_last_udpated
            + "&rule_deleted=" + ruleMetaData.rule_deleted
            + "&rule_data=" + ruleMetaData.rule_data,
            ruleMetaData, httpOptions);
        //return this.http.post<any>(this.backendUrl + '/rule-add.php', ruleMetaData, httpOptions);
    }

    /**
     * Update xisting rule in database
     * @param ruleMetaData rule that should be updated
     */
    public update(ruleMetaData: RuleMetaData): Observable<String> {
        return this.http.post<String>(this.backendUrl + "/rule-add.php" +
            "?rule_id=" + ruleMetaData.rule_id
            + "&rule_last_updated=" + ruleMetaData.rule_last_udpated
            + "&rule_deleted=" + ruleMetaData.rule_deleted
            + "&rule_data=" + ruleMetaData.rule_data,
            ruleMetaData, httpOptions);
        //return this.http.post<any>(this.backendUrl + '/rule-add.php', ruleMetaData, httpOptions);
    }

    /**
     * Fetch rule from database
     * @param rule_id of the searched rule
     */
    public getRule(rule_id: number): Observable<RuleMetaData[]> {
        return this.http.get<RuleMetaData[]>(`${this.backendUrl}/rule-get.php?rule_id=${rule_id}`);
    }

    /**
     * Fetch all rules from database
     */
    public getRules(): Observable<RuleMetaData[]> {
        return this.http.get<RuleMetaData[]>(`${this.backendUrl}/rule-get.php`);
    }

}